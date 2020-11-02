import { Component } from "react";
import { Link } from 'react-router-dom';

class MainMenu extends Component {

    render() {
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                        {/* <img src="" width="112" height="28" /> */}
                        Entangled Word
                    </a>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link to="/feed" className="navbar-item">
                            Main Feed
                        </Link>
                        <Link to="/new" className="navbar-item">
                            New Post
                        </Link>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                More
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    About
                                  </a>
                                <a class="navbar-item">
                                    Jobs
                                </a>
                                <a class="navbar-item">
                                    Contact
                                </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item">
                                    Report an issue
                                  </a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                {/* <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a> */}
                                <Link to="/login" className="button is-light">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainMenu;