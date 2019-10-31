import React from "react";
import styled from "styled-components";
import DbNode from "./DbNode";
import {NodesContext} from "../pages/nodes-context";

class Body extends React.Component {
    static contextType = NodesContext;

    render() {
        const { nodes } = this.context;
        return (
            <div>
                <ul>
                    {nodes.map((node) => <li key={node.id}><DbNode node={node}/></li>)}                    
                </ul>
            </div>
        )
    }
}

export default Body;