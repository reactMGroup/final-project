import { Redirect } from "react-router-dom";
import { loginHelper } from "../../global/user";
import getUserAll from "../../services/users";

const { Component } = require("react");

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            didLogIn: false,
            users: []
        };
        this.renderOneUser = this.renderOneUser.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    componentDidMount() {
        getUserAll().then(result => {
            this.setState({ users: result.data });
        });
    }

    setUser(user) {
        loginHelper.setLoggedIn(user);
        this.setState(previous => ({ didLogIn: true }));
    }

    renderList(user) {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image">
                                <img src={user.picture.large} alt="Profile" /></figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{user.name.title} {user.name.first} {user.name.last}</p>
                            <p className="subtitle is-6">{user.email}</p>
                        </div>
                    </div>
                    <div className="content">
                        {user.username}
                    </div>
                    <button onClick={() => this.setUser(user)} class="control button is-link is-light">Login as me</button>
                </div>
            </div>
        );
    }

    renderOneUser(user) {
        return this.state.didLogIn ? (<Redirect to="/" />) : this.renderList(user);
    }

    render() {
        const userCards = this.state.users.map(user => this.renderOneUser(user));
        return (<div>{userCards}</div>);
    }
}

export { UsersList }