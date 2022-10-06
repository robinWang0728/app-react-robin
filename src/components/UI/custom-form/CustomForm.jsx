import { useState } from "react";

const useCustomForm = (
  callback,
  validate = (values) => {
    return {};
  }
) => {
  const [formInputs, setFormInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleFormSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsSubmit(true);
    validating();
    console.log(JSON.stringify(formInputs, null, 2));
    callback(formInputs);
  };

  const handleInputChange = (event) => {
    event.persist();
    setFormInputs((formInputs) => ({
      ...formInputs,
      [event.target.name]: event.target.value,
    }));
    if (isSubmit) {
      validating();
    }
  };

  const validating = () => {
    const errors = validate(formInputs);
    setErrors(errors);
  };

  return {
    handleFormSubmit,
    handleInputChange,
    formInputs,
    errors,
  };
};

export default useCustomForm;
