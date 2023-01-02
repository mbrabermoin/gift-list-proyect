import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

function Textfield({
  id = "1",
  label,
  variant,
  initialValue = "",
  onChange,
  onKeyPress,
  type,
}) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      type={type}
    />
  );
}

Textfield.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  type: PropTypes.oneOf(["number", "text"]),
};

export default Textfield;
