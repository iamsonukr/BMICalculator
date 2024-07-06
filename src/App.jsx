// import "./App.css";
import { useEffect, useMemo, useState } from "react";
import './App.css'

function App() {
  const [height,setHeight]=useState()
  const [weight,setWeight]=useState()

  function onWeightChange (event){
    setWeight(event.target.value)

  }

  function onHeighChange(event){
    setHeight(event.target.value)
  }

  const output =useMemo(()=>{
    const calculateHeight=height/100;
    return (weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height])


  return (
    <div class="bmi-calculator">
    <h1>BMI Calculator</h1>
    <div className="input-section">
      <p className="slider-output">Weight : {weight}kg</p>
      <input type="range" onChange={onWeightChange} step="1" min="40" max="200" className="input-slider" />
      <p className="slider-output">Height : {height}cm</p>
      <input type="range" onChange={onHeighChange} className="input-slider" min="140" max="220"/>
    </div>
    <div className="output-section">
      <p>Your BMI is </p>
      <p className="output">{output}</p>
    </div>
  </div>
   
  );
  }
export default App;
