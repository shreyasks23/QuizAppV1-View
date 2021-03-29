import React, { useState } from "react";

export default function AddAssessment(props) {
  const btnStyle = {
    margin: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  const [assessment, setAssessment] = useState({
    name: "",
    maxMarks: "",
  });

  const handleReset = () => {
    setAssessment({
      name: "",
      maxMarks: "",
    });
    };
    
    const handleSubmit = (e) => {
        console.log(assessment);
        e.preventDefault();
    }

    const handleChange = (e) => {       
        setAssessment({
            ...assessment,    
            [e.target.id]: e.target.value
        });
        console.log(assessment);
    }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
                      <input id="name" type="text" value={assessment.name} onChange={ handleChange }/>
            <label htmlFor="name">Assessment name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3">
                      <input id="maxMarks" type="number" value={ assessment.maxMarks} onChange={ handleChange }/>
            <label htmlFor="maxMarks">Max Marks</label>
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
