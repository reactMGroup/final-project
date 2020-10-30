import BlogPost from "./blogpost-model.jsx";
import BPostPreview from "./blogpost-preview.jsx";

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
        const post1 = new BlogPost()
            .setId(1)
            .setAuthorFullName('First Blogger')
            .setText("post1")
            .setLastUdatedAt(new Date(Date.now() - 2000000000));
        const post2 = new BlogPost()
            .setId(2)
            .setAuthorFullName('Last Blogger')
            .setText("Adkjh kjhasdkjh kjh askdjh kjhjdak jh kjahsdkjhdauiyais dbaisuy asdiuywe baduy234234 nhiasdyi 3b4h iua sdhias du iasdhkjhdasiuighqwjwb njabsdugyieud ")
            .setLastUdatedAt(new Date(Date.now() - 2000));
        this.updateFromNewList([post1, post2]);
    }

    render() {
        const items = this.state.posts.map(item => < BPostPreview key={item.id} post={item} />)
        return (<div>
            <h5>Feed</h5>
            <ul>{items}</ul>
        </div>)
    }
}

export default PostsList;