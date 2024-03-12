import "./Tip.css";
import { useState } from "react";

function Tip({ amount }) {
  const green = { backgroundColor: "hsl(183, 100%, 15%)" };
  const clickgreen = { backgroundColor: "hsl(172, 67%, 45%)" };

  const [color, setColor] = useState(green);

  function handleClick() {
    setColor(clickgreen);
  }

  return (
    <button style={color} className="tip-percent" onClick={handleClick}>
      {amount}
    </button>
  );
}

export default Tip;
