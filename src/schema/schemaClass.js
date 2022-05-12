class Schema {
    constructor(props) {
        for (const key in props) {
            this[key] = props[key];
        }
    }
    validate = (obj) => {
        const result = {};
        for (const key in obj) {
            if (this[key]) {
                const validArr = this[key].validators.map((item) => this[item.validator](obj[key], item.required)                );
                const isValid = validArr.every((val) => val === true);
                result[key] = {
                    validate: isValid,
                    errMessage: !isValid ? this[key].message : "",
                };
            }
        }
        return result;
    };
  
    minValidator = (text, number) => {
        return text.length >= number ? true : false;
    };

    maxValidator = (text, number) => {
        return text.length <= number ? true : false;
      };

    emailValidator = (email) => {
        const emailRegExp =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        return emailRegExp.test(email);
    };

    required = (value, prop) => {
        if (prop) return value.length && value >= 0 ? true : false;
        return value.length ? true : false;
    };

    
    urlValidator = (url) => {
        let urlRegExp = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        
        return !!urlRegExp.test(url);
    };

    passportValidator = (number) => {  
        let passportRegExp = /[a-zA-Z]{2}[0-9]{7}/;
        if(!passportRegExp.test(number)) return false
        return true
    };
  
    phoneValidator = (number) => {
      const phoneRegExp = /^[0-9]*$/;
      return number.length && phoneRegExp.test(number) ? true : false;
    };
}
  
export const schema = new Schema({
    firstName: {
      type: "string",
      validators: [{ validator: "minValidator", required: 3 }],
      message: "Must have min 3 letters",
    },
    email: {
      type: "string",
      validators: [{ validator: "emailValidator" }],
      message: "Invalid email",
    },
    age: {
      type: "number",
      validators: [{ validator: "required"}],
      message: "Invalid age",
    },
    passport: {
      type: "string",
      validators: [{ validator: "passportValidator" }],
      message: "Invalid passport",
    },
    website: {
      type: "string",
      validators: [{ validator: "urlValidator" }],
      message: "Invalid URL",
    },
    phoneNumber: {
      type: "string",
      validators: [{ validator: "phoneValidator" }],
      message: "Invalid phone number",
    },
  });
  

  
  