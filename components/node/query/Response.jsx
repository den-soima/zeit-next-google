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
  border: 1px solid black;
  float: left;
  width: 650px;  
`;

const StyledPre = styled.pre`
 overflow-y: auto;
 scrollbar-base-color: gold;
 height: 100px
`;

export default Response;