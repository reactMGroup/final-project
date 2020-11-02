import { Component } from "react";
import PostsList from "./blogpost/posts-list";
import MainMenu from "./main-menu";
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PostForm from "./blogpost/blogpost-form";

class MainWindow extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <MainMenu />
                <Switch>
                    <Route exact path="/feed"><PostsList /></Route>
                    <Route exact path="/new"><PostForm /></Route>
                    <Route exact path="/about" render={() => (<div>About</div>)}></Route>
                    <Redirect from="/" to="/feed" />
                </Switch>
            </Router>
        )
    }
}

export default MainWindow;