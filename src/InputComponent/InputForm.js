import React, { useState } from "react";
import "./InputForm.css";
import Button from "../buttonUI/Button";
import ErrorHandiling from "../buttonUI/ErrorHandling";

const InputForm = (props) => {
  const [enteredusername, setEnteredusername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredusername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:'Invalid Input',
        message:'Please enter valid name and age (non-empty values).'
      })
      return;
    }
    if(+enteredAge<1){
      setError({
        title:'Invalid Age',
        message:'Please enter valid age (> 0).'
      })
      return;
    }
    const userData = {
      username: enteredusername,
      age: enteredAge,
      id:Math.random().toString()
    };
    props.user(userData)
    setEnteredusername("");
    setEnteredAge(""); 
//     console.log(userData)
  };
  const userNameHandler = (e) => {
//     console.log(e.target.value);

    setEnteredusername(e.target.value);
  };

  const userAgeHandler = (e) => {
//     console.log(e.target.value);
    setEnteredAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
    {error && <ErrorHandiling  title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Username</label>
        <input value={enteredusername} type="text" onChange={userNameHandler} />
        <label>Age (years)</label>
        <input value={enteredAge} type="text" onChange={userAgeHandler} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
    </div>
  );
};
export default InputForm;
