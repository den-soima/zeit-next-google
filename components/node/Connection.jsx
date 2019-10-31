import React from "react";
import styled from "styled-components";
import Input from "./connection/Input";
import {NodesContext} from "../../pages/nodes-context";

class Connection extends React.Component {

    constructor(props) {
        super(props);
        this.onInputEdit = this.onInputEdit.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormReset = this.onFormReset.bind(this);
    }

    static contextType = NodesContext;

    onInputEdit(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.context.updateConnection(this.props.nodeId, name, value)
    }

    onFormSubmit() {
        let {nodeId, connection} = this.props;
        fetch('http://localhost:3000/api/dbnodes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: nodeId,
                connection: connection,
            })
        })
            .then(res => res.json())
            .then(data => alert(`Node id:${data.id}, message:${data.message}`))
    }

    onFormReset() {
        this.context.reloadData();
    }

    render() {
        const {edit, connection} = this.props;
        return (
            <StyledFielset disabled={!edit}>
                <Input type="text"
                       name="user"
                       value={connection.user}
                       onChange={this.onInputEdit}
                />
                <Input type="text"
                       name="host"
                       value={connection.host}
                       onChange={this.onInputEdit}
                />
                <Input type="text"
                       name="database"
                       value={connection.database}
                       onChange={this.onInputEdit}
                />
                <Input type="text"
                       name="password"
                       value={connection.password}
                       onChange={this.onInputEdit}
                />
                <Input type="text"
                       name="port"
                       value={connection.port}
                       onChange={this.onInputEdit}
                />
                {/*<Input type="text"*/}
                {/*       name="query"*/}
                {/*       value={connection.query}*/}
                {/*       onChange={this.onInputEdit}*/}
                {/*/>*/}
                <InputButton type="button" value="Save" onClick={this.onFormSubmit}/>
                <InputButton type="reset" value="Cancel" onClick={this.onFormReset}/>
            </StyledFielset>
        )
    }
}

const StyledFielset = styled.fieldset`
  width: 300px;
`;

const InputButton = styled.input`
    margin: 10px 10px 0px 10px;
    width: 40%;
    font-size: xx-large;    
`;

export default Connection;