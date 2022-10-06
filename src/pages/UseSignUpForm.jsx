import { useEffect, useState } from "react";

const useSignUpForm = (callback, validate) => {
  const [formInputs, setFormInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleFormSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setErrors(validate(formInputs));
    setIsSubmitting(true);
  };

  const handleInputChange = (event) => {
    event.persist();
    setFormInputs((formInputs) => ({
      ...formInputs,
      [event.target.name]: event.target.value,
    }));
  };

  

  return {
    handleFormSubmit,
    handleInputChange,
    formInputs,
    errors
  };
};

export default useSignUpForm;
