import { Component } from "react";
import PostsList from "./blogpost/posts-list";

class MainWindow extends Component {
    render() {
        return (<div>
            <PostsList />
        </div>)
    }
}

export default MainWindow;