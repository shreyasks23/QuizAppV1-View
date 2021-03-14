import { Component } from "react";

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className='container row'>
            <form className='col s12'>
                <div className='row'>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Name</label>
                        {/* <span class="helper-text" data-error="wrong" data-success="right">Helper text</span> */}
                    </div>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                        {/* <span class="helper-text" data-error="wrong" data-success="right">Helper text</span> */}
                    </div>
                    <button className="btn-small waves-effect light-green" type="submit">Submit
                        <i className="material-icons right">save</i>
                    </button>
                </div>
            </form>
        </div>
        )

    }
}