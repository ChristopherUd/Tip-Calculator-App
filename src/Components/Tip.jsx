import "./Tip.css";

function Tip({ amount, color, handleClick}) {

  return (
    <button style={color} className="tip-percent" onClick={handleClick}>
      {typeof amount == 'number'? amount + "%" : amount }
    </button>
  );
}

export default Tip;
