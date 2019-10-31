import React from 'react';
import styled from "styled-components";
import {NodesContext} from "../../../pages/nodes-context";
import Stopwatch from "./run/Stopwatch";

class Run extends React.Component {
    constructor(props) {
        super(props);
        this.onRunClick = this.onRunClick.bind(this);
    }

    static contextType = NodesContext;

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
                <ButtonStyled onClick={this.onRunClick}>
                    RUN
                </ButtonStyled>
                <Stopwatch/>
            </Wrapper>                
        )
    }
}
const Wrapper = styled.div`
 border: 1px solid black;
`;

const ButtonStyled = styled.button`
  text-align: center;
  margin: 2px 0;
  width: 146px;
  height: 30px;
`;

export default Run;