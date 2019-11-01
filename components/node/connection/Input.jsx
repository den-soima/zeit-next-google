import React from 'react';
import styled from "styled-components";

const Input = (props) => {
    return (
        <Wrapper>
            <StyledLabel htmlFor="input">
                {props.label}
            </StyledLabel>              
            <StyledInput
                id="input"
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  clear: both;
  margin-top: 5px;
`;

const StyledLabel = styled.label`
    font-size: 0.75em;
    color: gray;
    font-family: "Courier New";
`;

const StyledInput = styled.input`
  width: 136px;
  float: right;
  font-size: 0.75em;
  padding-left: 5px;  
`;

export default Input;