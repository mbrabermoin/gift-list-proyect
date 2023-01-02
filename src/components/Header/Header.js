import { React, useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import {
  StyledDivButtonsContainer,
  StyledDivLoginContainer,
  StyledDivWrapper,
  StyledH1Company,
  StyledSpanWelcome,
} from "./Header.styled.js";

function Header({ user, onLogin, onLogout, onCreateAccount }) {
  const [showLogoutButton, setShowLogoutButton] = useState(true);
  const invertDisplay = () => {
    setShowLogoutButton(!showLogoutButton);
  };
  return (
    <header>
      <StyledDivWrapper>
        <div>
          <StyledH1Company>Company Inc.</StyledH1Company>
        </div>
        <div>
          {user ? (
            <>
              <StyledDivLoginContainer>
                <StyledSpanWelcome onClick={invertDisplay}>
                  Welcome, <b>{user.name}</b>!
                </StyledSpanWelcome>
                {showLogoutButton && (
                  <Button size="small" onClick={onLogout} label="Log out" />
                )}
              </StyledDivLoginContainer>
            </>
          ) : (
            <>
              <StyledDivButtonsContainer>
                <Button size="small" onClick={onLogin} label="Log in" />
                <Button
                  primary
                  size="small"
                  onClick={onCreateAccount}
                  label="Sign up"
                />
              </StyledDivButtonsContainer>
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
