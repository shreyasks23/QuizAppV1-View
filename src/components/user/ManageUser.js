import { Component } from "react";

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [{
                Id: 1,
                Name: 'shreyas',
                Password: 'passwordnew',
                IsDeleted: false
            },
            {
                Id: 2,
                Name: 'tejas',
                Password: 'passwordnew123',
                IsDeleted: false
            },
            {
                Id: 3,
                Name: 'mamatha',
                Password: 'passwordnew4',
                IsDeleted: false
            },
            {
                Id: 4,
                Name: 'swamy',
                Password: 'passwordnew5',
                IsDeleted: false
                },
                {
                    Id: 5,
                    Name: 'tatha',
                    Password: 'passwordnew6',
                    IsDeleted: false
                    }
            ]
        }

    }

    render() {
        const users = this.state.users;
        const title = 'Manage Users';
        return <div>
            <div>
                <span className='center-align'><h3>{ title }</h3></span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            User Name
                    </th>
                        <th>
                            User ID
                    </th>
                        <th>
                            Password
                    </th>
                        <th>
                            Is deleted
                    </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(
                            (u, i) => {
                                return (
                                    <tr key= {i}>
                                        <td>
                                            {u.Id}
                                        </td>
                                        <td>
                                            {u.Name}
                                        </td>
                                        <td>
                                            {u.Password}
                                        </td>
                                        <td>
                                            {u.IsDeleted.toString()}
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    }
}

export default User;