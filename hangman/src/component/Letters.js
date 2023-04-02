import Letter from "../component/Letter";
import { useState } from "react";

function Letters() {
  let [letterss, setLetterss] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);

  return (
    <div className="Letters">
      <div>Available Letters</div>
      <span>
        {letterss.map((charr) => (
          <Letter letterr={charr} />
        ))}
      </span>
    </div>
  );
}

export default Letters;
