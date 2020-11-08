import { Component } from "react";
import PostsList from "./blogpost/posts-list";
import MainMenu from "./main-menu";
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import PostForm, { modeNew, modeUnknown } from "./blogpost/blogpost-form";
import { UsersList } from "./user/users-list";
import CurrentUser from "./user/user-current";
import { loginHelper } from "../global/authentication";
import { getUser } from "../services/users";
import { TagsList } from "./tag/tags-list";
import { getTags, onlyUnique } from "../services/blogpost";

class MainWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            tags: []
        }
        this.loggedStateChanged = this.loggedStateChanged.bind(this);
        this.refreshTags = this.refreshTags.bind(this);
    }

    componentDidMount() {
        this.refreshCurrentUser();
        this.refreshTags();
    }

    loggedStateChanged() {
        this.refreshCurrentUser();
    }

    refreshTags() {
        getTags().then(tags => {
            this.setState(() => ({ tags: tags }));
        });
    }

    refreshCurrentUser() {
        if (loginHelper.getLoggedIn() !== null) {
            getUser(loginHelper.getLoggedIn()).then(result => {
                this.setState({ user: result.data });
            });
        } else {
            this.setState({ user: null });
        };

    }

    render() {
        return (
            <BrowserRouter>
                <MainMenu user={this.state.user} loggedStateChanged={this.loggedStateChanged} />
                <div className="tile is-ancestor">
                    <div className="tile is-10 is-parent">
                        <div className="tile is-child box">
                            <Switch>
                                <Route exact path="/feed"><PostsList /></Route>
                                <Route exact path="/new"><PostForm key={modeNew} refreshTags={this.refreshTags} /></Route>
                                <Route exact path="/details/:ID" render={(match) => <PostForm match={match} key={modeUnknown} />}></Route>
                                <Route exact path="/login"><UsersList loggedStateChanged={this.loggedStateChanged} /></Route>
                                <Route exact path="/about" render={() => (<div>About</div>)}></Route>
                                <Redirect from="/" to="/feed" />
                            </Switch>
                        </div>
                    </div>
                    <div className="tile is-vertical is-parent">
                        <div className="tile is-child box">
                            <CurrentUser user={this.state.user} />
                        </div>
                        <div className="tile is-child box">
                            <p className="title">Tags</p>
                            <TagsList tags={this.state.tags} />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default MainWindow;