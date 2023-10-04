import React,{useState} from "react";
import './App.css'
import InputForm from "./InputComponent/InputForm";
import InputLi from "./component/InputLi";


const App = (props) => {
  const initialUserData = props.userData || []; 
 const [inputData,setInputData] = useState(initialUserData)
  const userInputData = (data) =>{
    setInputData((prevUserData) => [data, ...prevUserData]);
  }
  // console.log("inputData",inputData)
  return(
    <div>
      <section id="goal-form">
      <InputForm user={userInputData}/>
    </section>
    <section id = "goals" >
      <InputLi inputData={inputData}/>
    </section>
    </div>
  );
};
export default App;