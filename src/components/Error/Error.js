import React from "react";
import "./error.css"

class Error extends React.Component {
    render() {
        const { message } = this.props;
        return <h6 >{message}</h6>;
    }
}

export default Error;