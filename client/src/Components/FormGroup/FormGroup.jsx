import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({
  onChange,
  titleLabel,
  id,
  type,
  warning = false,
  textWarning,
}) => {
  return (
    <div className="flex flex-col gap-2 my-4">
      <label
        htmlFor="username"
        className="font-medium text-textColor text-[1rem]"
      >
        {titleLabel}
      </label>
      <input
        onChange={onChange}
        type={type}
        id={id}
        className="border-b w-full focus:outline-none focus:border-b-primaryColor border-defaultBorder"
      />
      {warning && (
        <p className="text-[0.9rem] my-1 text-red-500 font-medium">
          {textWarning}
        </p>
      )}
    </div>
  );
};

FormGroup.propTypes = {
  onChange: PropTypes.func,
  titleLabel: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  textWarning: PropTypes.string,
};

export default FormGroup;
