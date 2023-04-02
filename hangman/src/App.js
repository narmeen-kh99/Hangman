import logo from "./logo.svg";
import Score from "./component/Score";
import Solution from "./component/Solution";
import "./App.css";
import Letters from "./component/Letters";
import { useState } from "react";

function App() {
  let [score, setscore] = useState(100);
  let [solution, setsolution] = useState({
    word: ["C", "A", "L", "M"],
    hint: "your ideal mood when coding.",
  });
  let [letterStatus, setLetterStatus] = useState({});
  const generateLetterStatuses = () => {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  };
  return (
    <div className="App">
      <Score scoreObj={score} />
      <Solution solutionObj={solution} letterStatusObj={letterStatus} />
      <Letters letterStatusObj={letterStatus} />
    </div>
  );
}

export default App;
