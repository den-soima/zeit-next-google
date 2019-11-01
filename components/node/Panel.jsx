import React from 'react';
import styled from "styled-components";
import TimeTable from "./panel/TimeTable";
import TimeHandler from "../../modules/time-handler";

class Panel extends React.Component {    
    render() {
     
        const {runHistory} = this.props;
        const attempts = TimeHandler.attempts(runHistory);
        const lasttime = TimeHandler.lasttime(runHistory);
        const mintime = TimeHandler.mintime(runHistory);
        const maxtime = TimeHandler.maxtime(runHistory);
        const averagetime = TimeHandler.averagetime(runHistory);

        return (
            <Wrapper>
                <TimeTable
                    attempts={attempts}
                    lasttime={lasttime}
                    mintime={mintime}
                    maxtime={maxtime}
                    averagetime={averagetime}
                />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
   box-sizing: border-box;
    border: 1px solid black;
    float: left;
    width: 120px;
    height: 100%;
    margin-right: 2px;
`;
export default Panel;