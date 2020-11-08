import { Component } from "react";

class TagsList extends Component {

    render() {
        const values = this.props.tags.join(', ');
        return (<textarea id="tags" readOnly={true} value={values}></textarea>)
    }

}

export { TagsList };