import "./Breakdown.css";

function Breakdown({ val }) {
  return (
    <>
      <div className="tip">
        <p>
          {val} Amount<br></br>
          <span>/person</span>
        </p>
        <p className="price">$0.00</p>
      </div>
    </>
  );
}

export default Breakdown;
