import React from 'react';

import CustomInput from '../CustomInput/CustomInput';
import {inputData} from "../../schema/schemaData";
import { schema } from '../../schema/schemaClass';
import "./validator.css";

const initialInputValue = {
    firstName: "",
    email: "",
    age: "",
    passport: "",    
    website: "",
    phoneNumber: ""
};
const initialErrorMessage = {
    firstName: "",
    email: "",
    age: "",
    passport: "",    
    website: "",
    phoneNumber: ""
};

class Validator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputsValues: {...initialInputValue},
            errorMessages: {...initialErrorMessage},
            isValid: null
        }
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);               
        const formObject = Object.fromEntries(data.entries());    
        const result = schema.validate(formObject);
        const isValidated = Object.values(result).every((item) => item.validate === true );        
        const { firstName, email, age, passport, website, phoneNumber} = result;
        
        if (isValidated) {
          this.setState({
            inputsValues: initialInputValue,
            errorMessages: initialErrorMessage,
            isValid: true
          });
        } else {
            this.setState({
                errorMessages: {
                    firstName: firstName.errMessage,
                    email: email.errMessage,
                    age: age.errMessage,
                    passport: passport.errMessage,
                    website: website.errMessage,              
                    phoneNumber: phoneNumber.errMessage
                },
                isValid: false
            });
        }
      };
    onChangeValue = (value, name) => {
        const inputsValues = {...this.state.inputsValues};
        inputsValues[name] = value;
        this.setState({
            inputsValues: inputsValues,
        });
    };
    
    
    render() { 
        const { errorMessages, inputsValues, isValid } = this.state;
        let div ;
        if (isValid){
            div = <div className = 'thanks'>Thanks, everything is ok</div>
        }
        return (
            <div>
                <form onSubmit = {(e) => this.onFormSubmit(e)}>
                    {Object.values(inputData).map((input, index) => (
                        <CustomInput
                            key = {index}
                            title = {input.title}
                            type = {input.type}
                            message = {errorMessages[input.title]}
                            onChangeValue = {this.onChangeValue}
                            value = {inputsValues[input.title]}
                        />
                    ))}
                    <button >Click</button>
                    {div}
                </form>
            </div>
        )
    }
}
 
export default Validator;