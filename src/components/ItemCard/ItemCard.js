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

function ItemCard({ index, item }) {
  const context = useContext(Context);
  const { deleteHandler } = context;
  const { editSetter } = context;
  const { duplicateSetter } = context;
  return (
    <StyledDivRecordContainer>
      <StyledDivItemContainer>
        <StyledDivRecordIndex>{index}</StyledDivRecordIndex>
        <StyledDivImageContainer>
          <StyledImage
            width="80px"
            height="80px"
            src={item.picture}
            alt={item.item}
          ></StyledImage>
        </StyledDivImageContainer>
        <StyledDivRecordInfo>
          <StyledDivInfoPart>{item.item}</StyledDivInfoPart>
          <StyledDivInfoPart>Cantidad: {item.quantity}</StyledDivInfoPart>
        </StyledDivRecordInfo>
      </StyledDivItemContainer>
      <StyledDivActionIcons>
        <IconButton onClick={() => editSetter(item)} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => duplicateSetter(item)}
          aria-label="duplicate"
        >
          <DuplicateIcon />
        </IconButton>
        <IconButton onClick={() => deleteHandler(item)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </StyledDivActionIcons>
      <StyledDivActionButtons>
        <StyledDivEditButton onClick={() => editSetter(item)}>
          Edit
        </StyledDivEditButton>
        <StyledDivDuplicateButton onClick={() => duplicateSetter(item)}>
          Duplicate
        </StyledDivDuplicateButton>
        <StyledDivDeleteButton onClick={() => deleteHandler(item)}>
          Delete
        </StyledDivDeleteButton>
      </StyledDivActionButtons>
    </StyledDivRecordContainer>
  );
}

export default ItemCard;
