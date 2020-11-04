import { Component } from "react";
import { Link } from 'react-router-dom';
import { loginHelper } from "../global/authentication";

class MainMenu extends Component {

    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <span className="navbar-item" href="#">
                        Entangled Word
                    </span>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/feed" className="navbar-item">
                            Main Feed
                        </Link>
                        <Link to="/new" className="navbar-item">
                            New Post
                        </Link>
                        {/* <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                  </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                  </a>
                            </div>
                        </div> */}
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="/login" className="button is-primary">
                                    Log in
                                </Link>
                                <span onClick={() => loginHelper.logout()} className="button is-light ">
                                    <strong>Log out</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainMenu;