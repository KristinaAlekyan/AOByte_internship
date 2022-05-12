import React from "react";
import Error from "../Error/Error";

class CustomInput extends React.Component {
    render() {
        const { title, message, type, onChangeValue, value } = this.props;
        return (
            <div >
                <h5 > {title}</h5>
                <input
                    type={type}
                    name={title}
                    value={value}
                    onChange={(event) =>onChangeValue(event.target.value, title)}
                />
                {message && <Error message={message} />}
            </div>
        );
    }
}

export default CustomInput;