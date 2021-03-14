import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddUser from '../../user/AddUser';
import User from "../../user/ManageUser";
import Dashboard from "../../dashboard/Dashboard"

function Navbar(props) {
    return <div>
        <Router>
            <div>
                <nav>
                    <div className="nav-wrapper indigo lighten-2">
                        <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Test Player</a>
                        <ul className="right hide-on-med-and-down">
                            <li><i className="material-icons">
                                <Link to="/Dashboard">home</Link>
                            </i></li>
                            <li><i className="material-icons">
                                <Link to="/Users">people_outline</Link></i></li>
                            <li><i className="material-icons"><Link to='/AddUser'>person_add
                            </Link></i></li> 
                            <li><i className="material-icons"><Link to='/AddUser'>account_circle
                            </Link></i></li> 
                        </ul>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/Dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/users">
                        <User />
                    </Route>
                    <Route path="/AddUser">
                        <AddUser />
                    </Route>
                </Switch>
            </div>
        </Router>        
    </div>
}

export default Navbar;