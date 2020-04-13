import React from 'react';
import JoditEditor from "jodit-react";

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                content: this.props.content,
            })
        }
    }

    updateContent(value) {
        this.setState({content: value})
    }

    render() {
        if (this.state.content === null) {
            return null;
        }

        return <JoditEditor
            value={this.state.content}
            config={{
                readonly: false // all options from https://xdsoft.net/jodit/play.html
            }}
            onChange={this.props.updateContent}
        />
    }
}

export default Editor;
