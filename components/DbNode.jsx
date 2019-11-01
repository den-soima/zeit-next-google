import React from "react";
import styled from "styled-components";
import Title from "./node/Title";
import Connection from "./node/Connection";
import Edit from "./node/Edit";
import {NodesContext} from "../modules/nodes-context";
import Panel from "./node/Panel";
import Run from "./node/Run";
import Response from "./node/Response";
import TimeHandler from "../modules/time-handler";

class DbNode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            runHistory: [],
            response: 'Response will be here ......',
        };

        this.onEditClick = this.onEditClick.bind(this);
        this.setResponse = this.setResponse.bind(this);
        this.addRunAttempt = this.addRunAttempt.bind(this);
    }

    static contextType = NodesContext;

    onEditClick() {
        if (this.state.edit)
            this.context.reloadData();

        this.setState((state) => {
            return {edit: !state.edit}
        })
    }

    addRunAttempt(response) {
        if (!response.result.hasOwnProperty('error')) {
            this.setState((state) => {
                let newRunHistory = state.runHistory.concat(response.processTime);
                this.calculateBest(this.props.node.id, TimeHandler.averagetime(newRunHistory));

                return {
                    runHistory: newRunHistory,
                    response: response.result,
                }
            });
        } else {
            this.setState({response: response.result,});
        }
    }

    setResponse(data) {
        this.setState({response: data})
    }

    calculateBest(nodeId, averagetime) {
        const NS_PER_SEC = 1e9;
        const {best} = this.context;

        let newBest = {
            nodeId: '',
            time: {
                seconds: 0,
                nanoseconds: 0
            }
        };

        const oldTime = best.time.seconds * NS_PER_SEC + best.time.nanoseconds;
        const newTime = averagetime.seconds * NS_PER_SEC + averagetime.nanoseconds;

        if (best.nodeId === '' ||
            best.nodeId !== nodeId && newTime < oldTime ||
            best.nodeId === nodeId) {
            newBest.nodeId = nodeId;
            newBest.time = averagetime;
        } else {
            newBest = best;
        }

        this.context.calculateBest(newBest);
    }

    render() {
        const {edit, runHistory, response} = this.state;
        const {node} = this.props;
        return (
            <Wrapper>
                <Title title={node.name} dblocation={node.dblocation}/>
                <Edit onClick={this.onEditClick} edit={edit}/>
                <NodeBody>
                    <Connection connection={node.connection}
                                nodeId={node.id}
                                edit={edit}
                    />

                    <Panel runHistory={runHistory}/>
                    <Run
                        node={node}
                        onRunClick={this.addRunAttempt}
                    />
                    <Response data={response}/>
                </NodeBody>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  box-sizing: border-box;
  clear: both;
  padding: 5px;
  margin: 5px;
`;

const NodeBody = styled.div`
   clear: both;
   margin: 5px 0 0 0;
   padding: 0;
   height: 165px;
`;

export default DbNode;