import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import {
  StyledDivWrapper,
  StyledH1Company,
  StyledSpanWelcome,
} from "./Header.styled.js";

function Header({ user, onLogin, onLogout, onCreateAccount }) {
  return (
    <header>
      <StyledDivWrapper>
        <div>
          <StyledH1Company>Company Inc.</StyledH1Company>
        </div>
        <div>
          {user ? (
            <>
              <StyledSpanWelcome>
                Welcome, <b>{user.name}</b>!
              </StyledSpanWelcome>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </StyledDivWrapper>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

export default Header;
