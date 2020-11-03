import { loginHelper } from '../../global/user.js';
import { create } from '../../services/blogpost.js'
import { clusterize } from '../../services/intellexer.js'
const { Component } = require("react")

class PostForm extends Component {
    static defaultProps = {
        mode: 'new'
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            tags: ['life', 'landscape']
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.extractTags = this.extractTags.bind(this);
        this.getTags = this.getTags.bind(this);
    }

     componentDidMount() {
        console.log(loginHelper.getLoggedIn());
     }

    getTags() {
        clusterize();//.then(response => console.log(response));
    }

    handleSubmit(event) {
        const toSave = {
            text: this.state.text,
            title: this.state.title,
            userID: loginHelper.getLoggedIn().id,
            lastUpdateAt: Date.now(),
            tags: this.state.tags
        };
        create(toSave)
            .then(response => console.log(`Status : ${response.status} Created with ID : ${response.data.id}`))
            .catch(exc => console.log(exc));
        event.preventDefault();
    }

    handleChange(event) {
        const fieldValue = event.target.id === 'tags' ? this.extractTags(event.target.value) : event.target.value
        this.setState({ [event.target.id]: fieldValue });
    }

    extractTags(fieldValue) {
        return fieldValue.split(',');
    }

    render() {
        const tagsValue = this.state.tags.join(',');
        return (
            <form onSubmit={this.handleSubmit}>
                <h3 className="subtitle is-6">New Post</h3>
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input id='title' value={this.state.title} onChange={this.handleChange} type='text' className="input" placeholder="Title" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Text</label>
                    <div class="control">
                        <textarea id='text' value={this.state.text} onChange={this.handleChange} className="textarea" placeholder="Type here"></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Tags</label>
                    <div class="control field is-grouped">
                        <input id='tags' value={tagsValue} onChange={this.handleChange} type='text' className="input" placeholder="Add tags separated with commas" />
                        <button onClick={this.getTags} class="control button is-link is-light">Get tags</button>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <input type="submit" value="Submit" class="button is-link"></input>
                    </div>
                </div>
            </form>
        );
    }
}

export default PostForm;