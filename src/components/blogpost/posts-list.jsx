const { Component } = require("react");

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
        this.updateFromNewList = this.updateFromNewList.bind(this);
    }

    updateFromNewList(newPosts) {
        newPosts.forEach(post =>
            this.setState(previous => ({ posts: previous.posts.concat([post]) })));
    }

    componentDidMount() {
        this.setState({ posts: [] });
        this.updateFromNewList(["post1", "post2"]);
    }

    render() {
        const items = this.state.posts.map(item => <div>{item}</div>)
        return (<div>
            <h5>Feed</h5>
            <ul>{items}</ul>
        </div>)
    }
}

export default PostsList;