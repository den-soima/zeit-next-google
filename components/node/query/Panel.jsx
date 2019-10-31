import React from 'react';
import styled from "styled-components";
import TimeTable from "./panel/TimeTable";

class Panel extends React.Component {
    
    attempts(runHistory) {
        return runHistory.length ? runHistory.length : 0;
    }
    
    lasttime(runHistory){
        let lasttime = {
            seconds: 0,
            nanoseconds: 0,
        };
        if (Array.isArray(runHistory) && runHistory.length){
            lasttime = runHistory[runHistory.length-1]
        }
        return lasttime
    }

    mintime(runHistory) {
        let mintime = {
            seconds: 0,
            nanoseconds: 0,
        };

        if (Array.isArray(runHistory) && runHistory.length) {
            mintime = runHistory[0];
            runHistory.forEach(attempt => {
                if (attempt.second < mintime.seconds)
                    mintime = attempt;
                else if (attempt.nanoseconds < mintime.nanoseconds) {
                    mintime = attempt;
                }
            });
        }

        return mintime;
    }

    maxtime(runHistory) {
        let maxtime = {
            seconds: 0,
            nanoseconds: 0,
        };
        if (Array.isArray(runHistory) && runHistory.length) {
            runHistory.forEach(attempts => {
                if (attempts.second > maxtime.seconds)
                    maxtime = attempts;
                else if (attempts.nanoseconds > maxtime.nanoseconds) {
                    maxtime = attempts;
                }
            });
        }
        return maxtime;
    }

    averagetime(runHistory) {
        let averagetime = {
            seconds: 0,
            nanoseconds: 0,
        };

        if (Array.isArray(runHistory) && runHistory.length) {
            let sum = runHistory.reduce((sum, attempt) => {
                    return {
                        seconds: sum.seconds + attempt.seconds,
                        nanoseconds: sum.nanoseconds + attempt.nanoseconds,
                    }
                }
            );

            const attemptsCount = runHistory.length;
            const NS_PER_SEC = 1e9;
            const timeInNanoseconds = sum.seconds * NS_PER_SEC + sum.nanoseconds;
            const average = timeInNanoseconds / attemptsCount;
            const averageSeconds = Math.trunc(average / NS_PER_SEC);
            const averageNanoseconds = Math.round(average - averageSeconds * NS_PER_SEC);
            
            averagetime = {seconds: averageSeconds, nanoseconds: averageNanoseconds}
        }
        return averagetime;
    }

    render() {
        
        const {runHistory} = this.props;
        
        const attempts = this.attempts(runHistory);
        const lasttime = this.lasttime(runHistory);
        const mintime = this.mintime(runHistory);
        const maxtime = this.maxtime(runHistory);
        const averagetime = this.averagetime(runHistory);

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
  border: 1px solid black;
    float: left;
    width: 150px;
`;
export default Panel;