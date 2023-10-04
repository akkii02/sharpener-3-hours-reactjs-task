import React from "react";
import './InputLi.css'

const InputLi = (props) => {
  // console.log('LI', props.inputData);
  return (
    <ul>
      {props.inputData.map((data) => (
        <li id="goal-li" key={data.id}> 
          {data.username}
          ({data.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default InputLi;
