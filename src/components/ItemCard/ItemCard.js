import React, { useContext } from "react";
import Context from "../../context";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DuplicateIcon from "@material-ui/icons/ControlPointDuplicate";
import {
  StyledDivRecordContainer,
  StyledDivRecordIndex,
  StyledDivRecordInfo,
  StyledDivActionButtons,
  StyledDivEditButton,
  StyledDivDuplicateButton,
  StyledDivDeleteButton,
  StyledDivActionIcons,
  StyledDivImageContainer,
  StyledDivInfoPart,
  StyledDivItemContainer,
  StyledImage,
} from "./ItemCard.styled.js";
function ItemCard(props) {
  const context = useContext(Context);
  const { deleteHandler } = context;
  const { editSetter } = context;
  const { duplicateSetter } = context;
  return (
    <li data-id={props.key} key={props.index}>
      <StyledDivRecordContainer>
        <StyledDivItemContainer>
          <StyledDivRecordIndex>{props.index + 1}</StyledDivRecordIndex>
          <StyledDivImageContainer>
            <StyledImage
              width="80px"
              height="80px"
              src={props.item.picture}
              alt={props.item.item}
            ></StyledImage>
          </StyledDivImageContainer>
          <StyledDivRecordInfo>
            <StyledDivInfoPart>{props.item.item}</StyledDivInfoPart>
            <StyledDivInfoPart>
              Cantidad: {props.item.quantity}
            </StyledDivInfoPart>
          </StyledDivRecordInfo>
        </StyledDivItemContainer>
        <StyledDivActionIcons>
          <IconButton onClick={() => editSetter(props.item)} aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => duplicateSetter(props.item)}
            aria-label="duplicate"
          >
            <DuplicateIcon />
          </IconButton>
          <IconButton
            onClick={() => deleteHandler(props.item)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </StyledDivActionIcons>
        <StyledDivActionButtons>
          <StyledDivEditButton onClick={() => editSetter(props.item)}>
            Edit
          </StyledDivEditButton>
          <StyledDivDuplicateButton onClick={() => duplicateSetter(props.item)}>
            Duplicate
          </StyledDivDuplicateButton>
          <StyledDivDeleteButton onClick={() => deleteHandler(props.item)}>
            Delete
          </StyledDivDeleteButton>
        </StyledDivActionButtons>
      </StyledDivRecordContainer>
    </li>
  );
}

export default ItemCard;
