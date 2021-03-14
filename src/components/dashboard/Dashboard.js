import { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-3 hoverable">
                        <div className="card-content white-text">
                            <span className="card-title">Assessment Summary</span>

                            <h3>3</h3>

                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            {/* <button className="link">This is a link</button> */}
                            <a href="/">This is a link</a>
                            <a href="/">This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-3 hoverable">
                            <div className="card-content white-text">
                                <span className="card-title">User Summary</span>

                                <h3>8</h3>

                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <a href="/">This is a link</a>
                            <a href="/">This is a link</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Dashboard;