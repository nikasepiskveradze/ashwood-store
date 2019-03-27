import React from "react";

const Textarea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        {...rest}
        className="form-control"
        rows="5"
      />
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default Textarea;
