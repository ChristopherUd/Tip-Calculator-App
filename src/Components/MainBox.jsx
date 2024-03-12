import "./MainBox.css";
import Breakdown from "./Breakdown";
import Tip from "./Tip";
import { useState } from "react";

function MainBox() {
  const clickgreen = { backgroundColor: "hsl(172, 67%, 45%)" };
  const green = { backgroundColor: "hsl(183, 100%, 15%)" };

  const tipNumber = [5, 10, 15, 20, 25, "custom"];

  // function createObjectFromArray(arr) {
  //   let obj = {};
  //   arr.forEach((item, index) => {
  //     obj[index] = item;
  //   });
  //   return obj;
  // }

  // const [colorState, setColorState] = useState(createObjectFromArray(tipNumber));

  let colorObject = {
    five: green,
    ten: green,
    fiteen: green,
    twenty: green,
    twentyFive: green,
    custom: green,
  };

  //initial state
  const [colorState, setColorState] = useState(colorObject);
   

  // function that will make all the button green
  function changeAllToGreen (newValue) {
    for (let key in colorObject) {
      colorObject[key] = newValue;
    }
    return colorObject
  }

  function highlightTip (value) {
    setColorState({...colorObject,[value]:clickgreen})
    
  }

  const handleClick = (value) => {
    //change all the green
    setColorState(changeAllToGreen(green))

    // change the  clicked to highlighted green
    highlightTip(value)
  }



  return (
    <>
      <div className="mainbox">
        <div className="bill">
          <div className="bill-div">
            <label>Bill</label>
            <input className="bill-input" placeholder="0"></input>
          </div>
          <div className="tip-div">
            <div>
              <label>Select Tip %</label>
            </div>
            <Tip color={colorState["five"]} handleClick={() => {handleClick("five")}} amount={"5%"}></Tip>
            <Tip color={colorState["ten"]} handleClick={() => {handleClick("ten")}} amount={"10%"}></Tip>
            <Tip color={colorState["fiteen"]} handleClick={() => {handleClick("fiteen")}} amount={"15%"}></Tip>
            <br></br>
            <Tip color={colorState["twenty"]} handleClick={() => {handleClick("twenty")}} amount={"20%"}></Tip>
            <Tip color={colorState["twentyFive"]} handleClick={() => {handleClick("twentyFive")}} amount={"25%"}></Tip>
            <Tip color={colorState["custom"]} handleClick={() => {handleClick("custom")}} amount={"Custom"}></Tip>

            {/* {tipNumber.map((tip,index) => (
              <Tip amount={tip} color={green}/>
            ))} */}
            <div className="people-div">
              <label>Number of People</label>
              <input type="number" className="bill-input"></input>
            </div>
          </div>
        </div>
        <div className="breakdown">
          <Breakdown val={"Tip"}></Breakdown>
          <Breakdown val={"Total"}></Breakdown>
          <button className="btn">RESET</button>
        </div>
      </div>
      ;
    </>
  );
}
export default MainBox;
