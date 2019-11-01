import React from "react";
import styled from "styled-components";

const Edit = ({onClick, edit}) => (
    <ButtonStyled onClick={onClick} edit={edit}>
        EDIT coonnection settings
    </ButtonStyled>
);

const ButtonStyled = styled.button`
  margin-left: 47px;
  width: 244px;
  border: 1px solid black; 
  border-radius: 5px;
  background-color: ${props => props.edit ? 'lightcoral' : 'white'};
`;

export default Edit;