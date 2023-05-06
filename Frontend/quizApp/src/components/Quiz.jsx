import React from "react";
import Question from "./Question";
function Quiz() {
  const handlePrev = () => {};
  const handleNext = () => {};
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
<Question/>
      <div className="grid">
        <button className="btn prev" onClick={handlePrev}>
          Prev
        </button>

        <button className="btn next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
