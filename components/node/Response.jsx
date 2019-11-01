import React from 'react';
import styled from "styled-components";

const Response = ({data})=>(
    <Wrapper>
        <StyledPre>      
                {JSON.stringify(data, null,1)}                   
        </StyledPre>
    </Wrapper>       
);

const Wrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  width: 400px;  
  height: 100%;
  float: left;
  background-color: aliceblue;
`;

const StyledPre = styled.pre`
 box-sizing: border-box;
 overflow: auto !important;
 scrollbar-base-color: gold;
 height: auto;
 max-height: 150px;
 margin: 5px;
 padding: 0 10px;

word-break: normal !important;
word-wrap: normal !important;
white-space: pre !important;
`;

export default Response;