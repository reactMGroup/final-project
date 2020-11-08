import { Component } from "react";

class TagsList extends Component {

    render() {
        const values = this.props.tags.join(', ');
        return (<textarea className="textarea is-medium is-info" rows='20' id="tags" readOnly={true} value={values}></textarea>)
    }

}

export { TagsList };