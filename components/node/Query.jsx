import React, {useState} from 'react';
import styled from "styled-components";
import Panel from "./query/Panel";
import Response from "./query/Response";
import Run from "./query/Run";

export default class Query extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            runHistory: [],
            response: 'Response will be here ......'
        };

        this.setResponse = this.setResponse.bind(this);
        this.addRunAttempt = this.addRunAttempt.bind(this);
    }

    addRunAttempt(response) {
        this.setState((state) => {
            return {
                runHistory: state.runHistory.concat(response.processTime),
                response: response.result,
            }
        });
    }

    setResponse(data) {
        this.setState({response: data})
    }

    render() {
        const {node} = this.props;
        const {runHistory, response} = this.state;
        return (
            <Wrapper>
                <Panel runHistory={runHistory}/>
                <Run
                    node={node}
                    onRunClick={this.addRunAttempt}
                />
                <Response data={response}/>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div`
    border: 1px solid black;
    float: left;
    width: 800px;
    display: flex;
`;
