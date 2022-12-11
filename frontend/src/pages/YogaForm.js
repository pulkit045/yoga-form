// import { useState } from "react";
import { useUsername } from "../hook/useUsername";

const YogaForm = () => {
  const username = useUsername();
  
  console.log(username);
  return (
    <>
      <h1>Yoga Form</h1>
    </>
  );
};

export default YogaForm;
