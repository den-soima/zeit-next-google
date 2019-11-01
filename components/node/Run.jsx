import React from 'react';
import styled from "styled-components";
import Stopwatch from "./run/Stopwatch";

class Run extends React.Component {
    constructor(props) {
        super(props);
        this.onRunClick = this.onRunClick.bind(this);
    }

    onRunClick() {
        const {id, connection} = this.props.node;
        fetch(`http://localhost:3000/api/runquery/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                connection: connection
            })
        })
            .then(res => res.json())
            .then(data => this.props.onRunClick(data))
    }

    render() {        
        return (
            <Wrapper>
                <StyledButton onClick={this.onRunClick}>
                    RUN Query
                </StyledButton>
                <Stopwatch/>
            </Wrapper>                
        )
    }
}
const Wrapper = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    height: 100%;
    width: 120px;
    float: left;
    margin-right: 2px;
`;

const StyledButton = styled.button`
  display: block;
  margin: 5px auto;
  width: 110px;
  height: 30px;
  border-radius: 5px;
  background-color: green;
  color: white;
`;

export default Run;