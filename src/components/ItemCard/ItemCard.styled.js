import styled from "styled-components";
import {
  GreenColor,
  GreyColor,
  TabletMinWidth,
  DesktopMinWidth,
} from "../../constant.js";

export const StyledDivRecordContainer = styled.div`
  background-color: ${GreyColor};
  margin: 10px 0px;
  border-radius: 5px;
  max-height: 90px;
  width: 100%;
  @media (min-width: ${TabletMinWidth}) {
    display: flex;
    margin: 20px auto;
    max-height: 80px;
    width: 80%;
  }
  @media (min-width: ${DesktopMinWidth}) {
    max-height: 100px;
    max-width: 1000px;
  }
`;

export const StyledDivItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: ${TabletMinWidth}) {
    width: 75%;
  }
`;

export const StyledDivRecordIndex = styled.div`
  margin: auto 10px;
  width: 30px;
  background: ${GreenColor};
  border-radius: 100px;
  text-align: center;
`;

export const StyledDivImageContainer = styled.div`
  width: 60px;
  height: 60px;
  @media (min-width: ${TabletMinWidth}) {
    width: 80px;
    height: 80px;
  }
  @media (min-width: ${DesktopMinWidth}) {
    width: 100px;
    height: 100px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledDivRecordInfo = styled.div`
  margin-left: 10px;
  text-align: left;
  width: 100%;
`;

export const StyledDivActionIcons = styled.div`
  display: none;
  @media (min-width: ${TabletMinWidth}) {
    width: 25%;
    display: flex;
  }
`;
export const StyledDivActionButtons = styled.div`
  display: flex;
  @media (min-width: ${TabletMinWidth}) {
    display: none;
  }
`;

export const StyledDivInfoPart = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledButtons = styled.div`
  text-align: center;
  width: 100%;
`;
export const StyledDivEditButton = styled(StyledButtons)`
  background: #f7dc6f;
`;
export const StyledDivDuplicateButton = styled(StyledButtons)`
  background: #d6eaf8;
`;
export const StyledDivDeleteButton = styled(StyledButtons)`
  background: #ec7063;
`;
