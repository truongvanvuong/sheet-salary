import { useState, useEffect } from "react";

const useValidationErrors = (credentials) => {
  const [validationErrors, setValidationErrors] = useState({});
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    const isEmpty = Object.values(credentials).some((value) => value === "");

    if (isEmpty) {
      const fieldErrors = {};

      Object.keys(credentials).forEach((field) => {
        if (credentials[field] === "") {
          fieldErrors[field] = true;
        }
      });
      setValidationErrors(fieldErrors);
    }
    setIsEmpty(isEmpty);
  }, [credentials]);
  return {
    validationErrors,
    isEmpty,
  };
};

export default useValidationErrors;
