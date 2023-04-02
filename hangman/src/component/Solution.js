//import { useState } from "react";

import { useState } from "react";
import Letter from "../component/Letter";

function Solution(props) {
  let [space, setSpace] = useState(["_", " _", " _", " _"]);
  /*const updateSpace = () => {
    let newArrSpase = [...space];
    newArrSpase = [...props.solutionObj.word];
    setSpace(newArrSpase);
  };*/
  return (
    <div className="Solution">
      <span>
        {props.solutionObj.word.map((s) => (
          <Letter letterr={s} />
        ))}
      </span>
      <div>
        <em>{props.solutionObj.hint}</em>
      </div>
    </div>
  );
}

export default Solution;
