import React, { useState } from "react";
import "../../styles/style.css";

export default function TestQuestion(props) {
  const Question = props.item;
  const [selectedOption, setSelectedOption] = useState({ selected: "" });
  const [bgColor, setBgColor] = useState("grey");

  const borderStyle = {
    border: "1px solid black",
    margin: "5px",
    padding: "8px",
  };

  //   const divStyle = {
  //     backgroundColor: bgColor,
  //   };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    console.log(selectedOption);

    props.questionSubmit(
      isChoiceCorrect(Question),
      selectedOption.selected,
      Question.questionId
    );
    //reset();
  };
  //   const changeHandler = (e) => {
  //     //setIsChecked(true);
  //     setSelectedOption({ selected: e.target.id });
  //     //console.log(selectedOption);
  //   };

  const isChoiceCorrect = (q) => {
    //debugger;
    if (Number(selectedOption.selected) === q.correctChoiceId) return true;
    else return false;
  };

  const handleClick = (e) => {
    console.log(e.target.id);
    setSelectedOption({ selected: e.target.id });
    bgColor === "white" ? setBgColor("red") : setBgColor("green");
    //e.target.style = bgColor;
    //setOptionClass("selectedOption");
  };

  return (
    <div className="container">
      <form style={borderStyle} onSubmit={handleSubmitBtn}>
        <h3>{`${Question.questionId}) ${Question.questionText}`}</h3>
        {Question.options &&
          Question.options.map((o, i) => {
            return (
              <div
                key={i}
                onClick={handleClick}
                style={{
                  backgroundColor: bgColor,
                }}
              >
                <p id={i + 1} value={o}>
                  {o}
                </p>
              </div>
            );
          })}
        <input type="submit" value="submit" className="btn" />
      </form>
    </div>
  );
}
