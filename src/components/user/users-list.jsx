import getUserAll from "../../services/users";

const { Component } = require("react");

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = { users: [] };
        this.renderOneUser = this.renderOneUser.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    componentDidMount() {
        getUserAll().then(result => {
            this.setState({ users: result.data });
        });
    }

    setUser(user) {

    }

    renderOneUser(user) {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
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
                    <button onClick={this.setUser(user)} class="control button is-link is-light">Login as me</button>
                </div>
            </div>


        );
    }

    render() {
        const userCards = this.state.users.map(user => this.renderOneUser(user));
        return (<div>{userCards}</div>);
    }
}

export { UsersList }