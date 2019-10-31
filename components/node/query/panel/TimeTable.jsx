import React from 'react';
import styled from "styled-components";
import Time from "./Time";
import ProcessTime from "../../../../modules/time-formatter";

class TimeTable extends React.Component {
    render() {
        const {attempts, lasttime, mintime, maxtime, averagetime} = this.props;
        return (
            <Wrapper>
                <Attempts>
                    <StyledName>Attempts: </StyledName>
                    <StyledValue>{attempts}</StyledValue>
                </Attempts>
                <Time name="Last time:" value={lasttime}/>             
                <Time name="Min time:" value={mintime} />               
                <Time name="Max time:" value={maxtime}/>                 
                <Time name="Average time:" value={averagetime}/>               
            </Wrapper>
        )
    }
}

TimeTable.defaultProps = {
    attempts: 0,
    mintime: ' 00 : 00000',
    maxtime: ' 00 : 00000',
    averagetime: ' 00 : 00000'
};

const Wrapper = styled.div`

`;

const Attempts = styled.div`
`;

export const StyledValue = styled.div`
text-align: center;
`;

export const StyledName = styled.div`
font-family: "Courier New";
font-size: 0.65em;
color: gray;
margin-left: 0.25em;
`;

export default TimeTable;