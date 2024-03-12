import "./MainBox.css";
import Breakdown from "./Breakdown";
import Tip from "./Tip";

function MainBox() {
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
            <Tip amount={"5%"}></Tip>
            <Tip amount={"10%"}></Tip>
            <Tip amount={"15%"}></Tip>
            <br></br>
            <Tip amount={"20%"}></Tip>
            <Tip amount={"25%"}></Tip>
            <Tip amount={"Custom"}></Tip>
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
