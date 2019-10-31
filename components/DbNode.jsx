import React, {useState} from "react";
import styled from "styled-components";
import Title from "./node/Title";
import Connection from "./node/Connection";
import Edit from "./node/Edit";
import Query from "./node/Query";
import {NodesContext} from "../pages/nodes-context";

class DbNode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        };

        this.onEditClick = this.onEditClick.bind(this);
    }

    static contextType = NodesContext;

    onEditClick() {
        if (this.state.edit)
            this.context.reloadData();

        this.setState((state) => {
            return {edit: !state.edit}
        })
    }

    render() {
        const {edit} = this.state;
        const {node} = this.props;
        return (
            <Wrapper>
                <Title title={node.name}/>
                <Edit onClick={this.onEditClick} edit={edit}/>
                <Connection connection={node.connection}
                            nodeId={node.id}
                            edit={edit}
                />

                <Query node={node}/>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  clear: both;
  padding: 5px;
  margin: 5px;
`;

export default DbNode;