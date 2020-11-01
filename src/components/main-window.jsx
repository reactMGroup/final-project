import { Component } from "react";
import PostsList from "./blogpost/posts-list";
import MainMenu from "./main-menu";

class MainWindow extends Component {
    render() {
        return (<div>
            <MainMenu />
            <PostsList />
        </div>)
    }
}

export default MainWindow;