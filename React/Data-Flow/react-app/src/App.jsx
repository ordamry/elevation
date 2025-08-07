import React, { useState } from "react";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";

function App() {
  const [currentExercise, setCurrentExercise] = useState(null);

  return (
    <div>
      <button onClick={() => setCurrentExercise("ex1")}>Exercise 1</button>
      <button onClick={() => setCurrentExercise("ex2")}>Exercise 2</button>

      {currentExercise === "ex1" && <Exercise1 />}
      {currentExercise === "ex2" && <Exercise2 />}
    </div>
  );
}

export default App;
