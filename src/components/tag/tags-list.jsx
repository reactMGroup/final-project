import { Component } from "react";

class TagsList extends Component {

    render() {
        const values = this.props.tags.join(', ');
        return (<div>
            <p className="title">Tags</p>
            <textarea className="textarea is-medium is-info" rows='20' id="tags" readOnly={true} value={values}></textarea>
        </div>
        )
    }

}

export { TagsList };