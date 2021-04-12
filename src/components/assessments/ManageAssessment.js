import { Component } from "react";
import { Link  } from "react-router-dom";

export default class ManageAssessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assessments: [
        {
          assessmentId: 1,
          assessmentName: "Test 1",
          maxMarks: 10.0,
        },
        {
          assessmentId: 2,
          assessmentName: "Test 2",
          maxMarks: 20.0,
        },
        {
          assessmentId: 3,
          assessmentName: "Test 3",
          maxMarks: 30.0,
        },
        {
          assessmentId: 4,
          assessmentName: "Test 4",
          maxMarks: 40.0,
        },
        {
          assessmentId: 5,
          assessmentName: "Test 5",
          maxMarks: 50.0,
        },
      ],
    };
  }

  render() {
    const assessments = this.state.assessments;
    return (
      <div className="container">
        <span>
          <h2>Manage Assessments</h2>
        </span>
        <table className="center-align">
          <thead>
            <tr>
              <th>Assessment ID</th>
              <th>Assessment Name</th>
              <th>Max Marks</th>
              <th colSpan={2} className="center-align">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.assessmentId}</td>
                  <td><Link to={{
                    pathname: '/assessmentQuestions',
                    state : a.assessmentId
                  }}>{a.assessmentName}</Link></td>
                  <td>{a.maxMarks}</td>
                  <td className="center-align">
                    <button className="btn btn-small light-green darken-3">
                      Edit
                    </button>
                  </td>
                  <td className="center-align">
                    <button className="btn btn-small red darken-3">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
