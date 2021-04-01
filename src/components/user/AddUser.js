import { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleClear = (event) => {
    this.setState({
      userName: "",
      email: "",
      password: "",
    });
    console.log("cleared");
  };

  render() {
    const btnStyle = {
      margin: "5px",
      "paddingLeft": "10px",
      "paddingRight": "10px",
    };

    return (
      <div className="container row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="userName"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.userName}
                required
              />
              <label htmlFor="userName">Name</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                user name
              </span>
            </div>
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
              <label htmlFor="email">Email</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Email
              </span>
            </div>
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={this.handleChange}
                value={this.state.password}
                required
              />
              <label htmlFor="password">Password</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Password
              </span>
            </div>
            <button
              className="btn-small waves-effect light-green"
              style={btnStyle}
              type="submit"
            >
              Submit
              <i className="material-icons right">save</i>
            </button>
            <button
              type="reset"
              className="btn-small waves-effect red accent-4"
              style={btnStyle}
              onClick={this.handleClear}
            >
              Clear
              <i className="material-icons right">clear</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
