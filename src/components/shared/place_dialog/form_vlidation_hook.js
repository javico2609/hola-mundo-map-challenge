import { useState, useEffect } from "react";
import validate from "validate.js";

const schema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 15,
    },
  },
  description: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 30,
    },
  },
};

function useFormValidation(values = {}) {
  const [formState, setFormState] = useState({
    isValid: false,
    values,
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return { handleChange, hasError, formState };
}

export default useFormValidation;
