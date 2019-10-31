import React from 'react';
import styled from "styled-components";
import {StyledName, StyledValue} from "./TimeTable";
import ProcessTime from "../../../../modules/time-formatter";

const Time = ({name, value}) => (
    <Wrapper>
        <StyledName>{name}</StyledName>
        <StyledValue>{ProcessTime.formatTime(value)}</StyledValue>
    </Wrapper>
);
const Wrapper = styled.div`
border-top: 2px solid lightgray;
`;

export default Time;