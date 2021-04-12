import React, { useEffect } from "react";
import Question from "../question/Question";
import { useLocation } from "react-router-dom";
import AssessmentData from "./AssessmentData";

export default function AssessmentQuestion(props) {
  const AssessmentQuestions = AssessmentData();

  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
    console.log(AssessmentData());
  });

    return (
      
    <>
      <h3>{AssessmentQuestions[location.state - 1].assessmentName}</h3>
      {AssessmentQuestions[location.state - 1].questions &&
        AssessmentQuestions[location.state - 1].questions.map((q, i) => {
          return <Question item={q} key={i} />;
        })}
    </>
  );
}
