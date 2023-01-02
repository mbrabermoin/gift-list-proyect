import styled from "styled-components";
import { TabletMinWidth } from "../../constant.js";

const StyledSmallButton = `
font-size: 12px;
padding: 10px 8px;
@media (min-width: ${TabletMinWidth}) {
  padding: 10px 16px;
}`;

const StyledMediumButton = `
font-size: 14px;
padding: 11px 10px;
@media (min-width: ${TabletMinWidth}) {
  padding: 11px 20px;
}
`;

const StyledLargeButton = `
font-size: 16px;
padding: 12px 12px;
@media (min-width: ${TabletMinWidth}) {
  padding: 12px 24px;
}`;

const StyledPrimaryButton = `
color: white;
background-color: #1ea7fd;`;

const StyledSecondaryButton = `color: #333;
background-color: transparent;
box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;`;

export const StyledDivButton = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${(props) => (props.primary ? StyledPrimaryButton : StyledSecondaryButton)}
  ${(props) =>
    props.size === "small"
      ? StyledSmallButton
      : props.size === "large"
      ? StyledLargeButton
      : StyledMediumButton}
    background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null}
`;
