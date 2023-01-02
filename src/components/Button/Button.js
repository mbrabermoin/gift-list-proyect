import React from "react";
import PropTypes from "prop-types";
import { StyledDivButton } from "./Button.styled.js";

function Button({ backgroundColor, label, onClick, primary, size }) {
  return (
    <StyledDivButton
      backgroundColor={backgroundColor}
      primary={primary}
      size={size}
      onClick={onClick}
    >
      {label}
    </StyledDivButton>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Button;
