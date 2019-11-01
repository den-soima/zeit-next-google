import React from "react";
import styled from "styled-components";
import Input from "./connection/Input";
import {NodesContext} from "../../modules/nodes-context";

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
        fetch('/api/dbnodes', {
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
            .then(data => console.log(`Node id:${data.id}, message:${data.message}`))
    }

    onFormReset() {
        this.context.reloadData();
    }

    render() {
        const {edit, connection} = this.props;
        return (
            <StyledFieldset disabled={!edit}>
                <StyledData>
                    <StyledInputs>
                        <Input type="text"
                               label="User"
                               name="user"
                               value={connection.user}
                               onChange={this.onInputEdit}
                        />
                        <Input type="text"
                               label="Host"
                               name="host"
                               value={connection.host}
                               onChange={this.onInputEdit}
                        />
                        <Input type="text"
                               label="Database"
                               name="database"
                               value={connection.database}
                               onChange={this.onInputEdit}
                        />
                        <Input type="text"
                               label="Password"
                               name="password"
                               value={connection.password}
                               onChange={this.onInputEdit}
                        />
                        <Input type="text"
                               label="Port"
                               name="port"
                               value={connection.port}
                               onChange={this.onInputEdit}
                        />
                    </StyledInputs>
                    <StyledButtons>
                        <Button type="button" value="Save" onClick={this.onFormSubmit}/>
                        <Button type="reset" value="Cancel" onClick={this.onFormReset}/>
                    </StyledButtons>                  
                </StyledData>
                <StyledTextarea
                    type="textarea"
                    name="query"
                    value={connection.query}
                    onChange={this.onInputEdit}
                />
            </StyledFieldset>
        )
    }
}

const StyledFieldset = styled.fieldset`
    width: 445px;
    height: 100%;
    display: block; 
    box-sizing: border-box;
    float: left;
    padding: 0;
    border: 1px solid black;
`;

const StyledData = styled.div`
    box-sizing: border-box;
    width: 215px;
    float: left;
`;

const StyledTextarea = styled.textarea`
    box-sizing: border-box;
    width: 215px;
    float: right;
    margin: 5px;
    height: 93%;
    padding: 5px;
    resize: none;
    overflow-y: scroll;
`;
const StyledInputs = styled.div`
    box-sizing: border-box;
    margin: 0 0 0 8px;
`;

const StyledButtons = styled.div`
    box-sizing: border-box;
    clear: both; 
    width: 100%;
    margin: 0 auto;
    padding: 0;
    text-align: center;
`;

const Button = styled.input`
    margin: 10px 2px;
    width: 47%;
    font-size: xx-large;
`;

export default Connection;