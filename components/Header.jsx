import React from "react";
import ProcessTime from "../modules/time-formatter";
import styled from "styled-components";

const Header = ({zeit, best}) => (
    <Wrapper>
        <StyledButton>Add node (not working..)</StyledButton>
        <StyledDiv>Zeit location [regions: "lhr1", "cdg1"]: {zeit}</StyledDiv>
        <StyledDiv>Best node:</StyledDiv>
        <StyledValue>{best.nodeId}</StyledValue>
        <StyledDiv>Average time:</StyledDiv>
        <StyledValue>{ProcessTime.formatTime(best.time)}</StyledValue>
    </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  clear: both;
  flex: none;
  height: 30px;
`;

const StyledButton = styled.button`
 width: 150px;
 height: 30px;
  margin: 0 40px;
  float:left;  
  padding: 0;
`;
const StyledDiv = styled.div`
margin-left: 50px;
float: left;
`;

const StyledValue = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-weight: bold;
font-size: 1.2em;
color: black;
border: 1px solid gray;
background-color: lightgray;
width: 150px;
height: 30px;
margin-left: 5px;
`;

export default Header;