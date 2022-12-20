const useFormValidator = props => {
  const { useState } = require("react");
  const [fields, setFields] = useState(props);

  const emailPattern = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  const formValid = function(errors) {
    let valid = true;
    Object.values(errors).forEach(function(value) {
      value.length !== 0 && (valid = false);
    });

    return valid;
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    let errors = fields.errors;
    Object.keys(errors).map(error => {
      if (event.target[error] !== undefined && fields[error] !== null)
        validate(
          error,
          event.target[error].placeholder,
          fields[error],
          event.target[error].type,
          fields.errors
        );
    });

    if (formValid(errors)) {
      if (props.mode === "I") resetForm(event);
      return true;
    } else {
      let errors = fields.errors;
      Object.keys(errors).every(function(key) {
        if (errors[key].length > 0) {
          event.target[key].focus();
          return false;
        } else {
          return true;
        }
      });

      return false;
    }
  };

  const doValidate = event => {
    const { name, placeholder, value, type } = event.target;
    let errors = fields.errors;
    validate(name, placeholder, value, type, errors);
  };

  const onHandleChange = event => {
    doValidate(event);
  };

  const onHandleBlur = event => {
    doValidate(event);
  };

  const validate = (name, placeholder, value, type, errors) => {
    switch (type) {
      case "text":
      case "password":
        errors[name] =
          value.length == 0 && props.errors.hasOwnProperty(name)
            ? `The ${placeholder ?? name} field is required`
            : "";
        break;
      case "email":
        errors[name] =
          value.length == 0 && props.errors.hasOwnProperty(name)
            ? `The ${placeholder ?? name} field is required`
            : !emailPattern.test(value) && props.errors.hasOwnProperty(name)
            ? "The Email is invalid"
            : "";
        break;
    }

    setFields({
      ...fields,
      [name]: value,
      errors
    });
  };

  const resetForm = event => {
    let resetFields = {
      ...props
    };
    Object.keys(fields).forEach(field => {
      if (event.target[field] !== undefined) {
        event.target[field].value = "";
      }
    });

    setFields({
      ...fields,
      ...resetFields
    });
  };

  return {
    onHandleChange,
    onHandleSubmit,
    onHandleBlur,
    fields,
    setFields
  };
};

const errorMessage = errorMsg => {
  return errorMsg;
};

module.exports = {
  useFormValidator,
  errorMessage
};
