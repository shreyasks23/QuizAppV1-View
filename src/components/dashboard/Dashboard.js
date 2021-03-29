import { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-3 hoverable">
            <div className="card-content white-text">
              <span className="card-title">Assessment Summary</span>
              <h3>3</h3>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
                <Link to='/AddAssessment'>Create Assessment</Link>
                <Link to='/Manageassessment'>Manage assessments</Link>  
              {/* <a href="/">Create Assessment</a>
              <a href="/Manageassessment">Manage assessments</a> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-3 hoverable">
              <div className="card-content white-text">
                <span className="card-title">User Summary</span>
                <h3>8</h3>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <Link to='/AddUser'>New User</Link>
                <Link to='/Users'>Manage Users</Link>

                {/* <a href="/AddUser">Create new user</a>
                <a href="/Users">Manage Users</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
