import { Component } from "react";

class TagsList extends Component {

    render() {
        const tags = this.props.tags.map(tag => (<span class="tag is-info is-light">{tag}</span>));
        return (<div>
            <p className="title">Tags</p>
            {tags}
        </div>
        )
    }

}

export { TagsList };