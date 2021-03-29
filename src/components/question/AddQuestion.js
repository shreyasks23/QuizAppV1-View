import React, { useState, useEffect } from "react";

export default function AddQuestion(props) {
  const btnStyle = {
    margin: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  const [question, setQuestion] = useState({
    qtxt: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
  });

  useEffect(() => {
    console.log(question);
  });

  const handleReset = (e) => {
    setQuestion({
      qtxt: "",
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: "",
    });
  };

  const handleChange = (e) => {
    setQuestion({
      ...question,
      [e.target.id]: e.target.value,
    });
    console.log([e.target.id], e.target.value);
  };

  const handleSubmit = (e) => {
    //console.log(e);
    console.table(question);
    e.preventDefault();
  };

  return (
    <div className="container row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="qtxt"
              type="text"
              onChange={handleChange}
              value={question.qtxt}
            />
            <label htmlFor="qtxt">Question Text</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="opt1"
              type="text"
              onChange={handleChange}
              value={question.opt1}
            />
            <label htmlFor="opt1">option 1</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="opt2"
              type="text"
              onChange={handleChange}
              value={question.opt2}
            />
            <label htmlFor="opt2">option 2</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="opt3"
              type="text"
              onChange={handleChange}
              value={question.opt3}
            />
            <label htmlFor="opt3">option 3</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="opt4"
              type="text"
              onChange={handleChange}
              value={question.opt4}
            />
            <label htmlFor="opt4">option 4</label>
          </div>
        </div>
        <button
          className="btn waves-effect light-green"
          style={btnStyle}
          type="submit"
        >
          submit
          <i className="material-icons right">save</i>
        </button>

        <button
          className="btn waves-effect red accent-4"
          style={btnStyle}
          onClick={handleReset}
          type="reset"
        >
          clear
          <i className="material-icons right">clear</i>
        </button>
      </form>
    </div>
  );
}
