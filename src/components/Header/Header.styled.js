import styled from "styled-components";
import { TabletMinWidth } from "../../constant.js";

export const StyledDivWrapper = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${TabletMinWidth}) {
    padding: 15px 20px;
  }
`;

export const StyledSpanWelcome = styled.span`
  color: #333;
  font-size: 14px;
  margin-right: 10px;
  cursor: pointer;
  align-self: center;
`;

export const StyledH1Company = styled.div`
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
`;

export const StyledDivButtonsContainer = styled.div`
  display: flex;
`;

export const StyledDivLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${TabletMinWidth}) {
    flex-direction: row;
  }
`;
