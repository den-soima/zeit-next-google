import React from "react";
import styled from "styled-components";

const Edit = (props) => (
    <ButtonStyled onClick={props.onClick} edit={props.edit}>
        EDIT
    </ButtonStyled>
);

const ButtonStyled = styled.button`
  width: 300px;
  border: 1px solid black; 
  background-color: ${props => props.edit ? 'lime' : 'white'};
`;

export default Edit;