import { create } from '../../services/blogpost.js'
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

    }

    // componentDidMount() {

    // }

    handleSubmit(event) {
        const toSave = {
            text: this.state.text,
            title: this.state.title,
            userID: 'user 01',
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
                <label>Title
                <input id='title' value={this.state.title} onChange={this.handleChange} type='text'></input>
                </label>
                <label>
                    Text:
              <textarea id='text' value={this.state.text} onChange={this.handleChange} />
                </label>
                <label>Tags
                <input id='tags' value={tagsValue} onChange={this.handleChange} type='text'></input>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default PostForm;