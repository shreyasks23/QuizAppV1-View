import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddUser from "../../user/AddUser";
import User from "../../user/ManageUser";
import Dashboard from "../../dashboard/Dashboard";
import ManageAssessment from "../../assessments/ManageAssessment";
import ViewQuestions from "../../question/ViewQuestions";
import AddQuestion from "../../question/AddQuestion";
import AddAssessment from "../../assessments/AddAssessment";

export default function Navbar(props) {
  return (
    <>
      <Router>
        <>
          <nav>
            <div className="nav-wrapper indigo lighten-2">
              <a href="#!" className="brand-logo">
                <i className="material-icons">cloud</i>Test Player
              </a>
              <ul className="right">
                <li>
                  <i className="material-icons">
                    <Link to="/Dashboard">home</Link>
                  </i>
                </li>
                <li>
                  <i className="material-icons">
                    <Link to="/Users">people_outline</Link>
                  </i>
                </li>
                <li>
                  <i className="material-icons">
                    <Link to="/AddUser">person_add</Link>
                  </i>
                </li>
                <li>
                  <i className="material-icons">
                    <Link to="/AddUser">account_circle</Link>
                  </i>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/users">
              <User />
            </Route>
            <Route path="/AddUser">
              <AddUser />
            </Route>
            <Route path="/ManageAssessment">
              <ManageAssessment />
            </Route>
            <Route path="/ViewQuestions">
              <ViewQuestions />
            </Route>
            <Route path="/AddQuestion">
              <AddQuestion />
            </Route>
            <Route path="/AddAssessment">
              <AddAssessment />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
}
