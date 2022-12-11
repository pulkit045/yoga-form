import React, { useState, useContext } from "react";

const UsernameContext = React.createContext();
const UsernameUpdateContext = React.createContext();

const useUsername = () => useContext(UsernameContext);
const useUpdateUsername = () => useContext(UsernameUpdateContext);

const UsernameProvider = ({children})=>{
  const [username, setUsername] = useState(localStorage.getItem("user name"));

  const getUsername = ()=>{
    const foundUsername = localStorage.getItem("username");
    if(foundUsername){
      setUsername(foundUsername);
    }
    else{
      setUsername(null);
    }
  }

  return (
    <UsernameContext.Provider value={username}>
      <UsernameUpdateContext.Provider value={getUsername}>
        {children}
      </UsernameUpdateContext.Provider>
    </UsernameContext.Provider>
  )
}

export default UsernameProvider;
export { useUsername, useUpdateUsername };