import React, { Component } from "react";
import AssessmentData from "../assessments/AssessmentData";
import TestQuestion from "../question/TestQuestion";
import Option from "../question/Options";

export default class TestPlayer extends Component {
  constructor(props) {
    super(props);
    const assessmentQuestions = AssessmentData();
    this.state = {
      assessmentQuestions,
      questionId: 0,
    };
  }

  componentDidMount = (e) => {
    //console.log(this.state.assessmentQuestions);
  };

  handleQuestionSubmit = (cc, ch, qid) => {
    console.log(
      `selected choice is ${cc} , choice id is ${ch} and questionID is ${qid}`
    );
    this.setState({
      ...this.state,
      questionId: qid,
    });
  };

  render() {
    const assessmentQuestions = this.state.assessmentQuestions[2];
    const question = assessmentQuestions.questions[this.state.questionId];
    return (
      <>
        <Option value="sample" />
        <h3>Test player</h3>
        <h4>{assessmentQuestions.assessmentName}</h4>
        <TestQuestion
          item={question}
          questionSubmit={this.handleQuestionSubmit}
        />
      </>
    );
  }
}
