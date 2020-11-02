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
            tags: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // componentDidMount() {

    // }

    handleSubmit(event) {
        const toSave = {
            text: this.state.text,
            title: this.state.title,
            userID: 'user 01',
            lastUpdateAt: Date.now()
        };
        create(toSave);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title
                <input id='title' value={this.state.title} onChange={this.handleChange} type='text'></input>
                </label>
                <label>
                    Text:
              <textarea id='text' value={this.state.text} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default PostForm;