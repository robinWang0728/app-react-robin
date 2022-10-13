import React, { useState } from 'react';

// const useCustomForm = (
//   callback,
//   validate = (values) => {
//     return {};
//   }
// ) => {
//   const [formInputs, setFormInputs] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleFormSubmit = (event) => {
//     if (event) {
//       event.preventDefault();
//     }
//     setIsSubmit(true);
//     validating();
//     if(Object.keys(errors).length === 0) {
//       callback(formInputs);
//     }
//   };

//   const handleInputChange = (event) => {
//     event.persist();
//     setFormInputs((formInputs) => ({
//       ...formInputs,
//       [event.target.name]: event.target.value,
//     }));
//     if (isSubmit) {
//       validating();
//     }
//   };

//   const validating = () => {
//     const errors = validate(formInputs);
//     setErrors(errors);
//   };

//   return {
//     handleFormSubmit,
//     handleInputChange,
//     formInputs,
//     errors,
//   };
// };

// export default useCustomForm;

// const InputField = React.memo((props) => {
//   const {
//     label,
//     type,
//     name,
//     handleChange,
//     errorMessage,
//     isValid,
//     value
//   } = props;

//   return (
//     <div className="inputContainer">
//       <label>{label}</label>
//       <input type={type} name={name} value={value} onChange={handleChange} />
//       {errorMessage && !isValid && (
//         <span className="error">{errorMessage}</span>
//       )}
//     </div>
//   );
// });

// export default InputField;

// /**
//  * creates and returns object representation of form field
//  *
//  * @param {string} label - label to show with the form input
//  * @param {string} name - input name
//  * @param {string} type - input type
//  * @param {string} defaultValue - default value for the input
//  */
// function createFormFieldConfig(label, name, type, defaultValue = "") {
//   return {
//     renderInput: (handleChange, value, isValid, error, key) => {
//       return (
//         <InputField
//           key={key}
//           name={name}
//           type={type}
//           label={label}
//           isValid={isValid}
//           value={value}
//           handleChange={handleChange}
//           errorMessage={error}
//         />
//       );
//     },
//     label,
//     value: defaultValue,
//     valid: false,
//     errorMessage: "",
//     touched: false
//   };
// }

// // object representation of signup form
// export const signupForm = {
//   name: {
//     ...createFormFieldConfig("Full Name", "name", "text"),
//     validationRules: [
//       requiredRule("name"),
//       minLengthRule("name", 3),
//       maxLengthRule("name", 25)
//     ]
//   },
//   email: {
//     ...createFormFieldConfig("Email", "email", "email"),
//     validationRules: [
//       requiredRule("email"),
//       minLengthRule("email", 10),
//       maxLengthRule("email", 25)
//     ]
//   },
//   password: {
//     ...createFormFieldConfig("Password", "password", "password"),
//     validationRules: [
//       requiredRule("password"),
//       minLengthRule("password", 8),
//       maxLengthRule("password", 20)
//     ]
//   },
//   confirmPassword: {
//     ...createFormFieldConfig("Confirm Password", "confirmPassword", "password"),
//     validationRules: [passwordMatchRule()]
//   }
// };

// /**
//  * creates and returns a validation rule object that
//  * is used by useForm hook to validate the form inputs
//  *
//  * @param {string} ruleName - name of the validation rule
//  * @param {string} errorMessage - message to display
//  * @param {function} validateFunc - validation function
//  */
//  function createValidationRule(ruleName, errorMessage, validateFunc) {
//   return {
//     name: ruleName,
//     message: errorMessage,
//     validate: validateFunc
//   };
// }

// export function requiredRule(inputName) {
//   return createValidationRule(
//     "required",
//     `${inputName} required`,
//     (inputValue, formObj) => inputValue.length !== 0
//   );
// }

// export function minLengthRule(inputName, minCharacters) {
//   return createValidationRule(
//     "minLength",
//     `${inputName} should contain atleast ${minCharacters} characters`,
//     (inputValue, formObj) => inputValue.length >= minCharacters
//   );
// }

// export function maxLengthRule(inputName, maxCharacters) {
//   return createValidationRule(
//     "minLength",
//     `${inputName} cannot contain more than ${maxCharacters} characters`,
//     (inputValue, formObj) => inputValue.length <= maxCharacters
//   );
// }

// export function passwordMatchRule() {
//   return createValidationRule(
//     "passwordMatch",
//     `passwords do not match`,
//     (inputValue, formObj) => inputValue === formObj.password.value
//   );
// }

// https://academind.com/tutorials/reactjs-a-custom-useform-hook
