import React from "react";
import styled from "styled-components";
import DbNode from "./DbNode";
import {NodesContext} from "../modules/nodes-context";

class Body extends React.Component {
    static contextType = NodesContext;

    render() {
        const { nodes } = this.context;
        return (
            <StyledBody>
                <ul>
                    {nodes.map((node) => <li key={node.id}><DbNode node={node}/></li>)}                    
                </ul>
            </StyledBody>
        )
    }
}

const StyledBody = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

export default Body;