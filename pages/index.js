import React from 'react'
import Header from "../components/Header";
import Body from "../components/Body";
import {NodesContext} from "./nodes-context";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.addNode = (node) => {
            this.setState(state => {
                return {
                    nodes: state.nodes.push(node)
                }
            })
        };

        this.updateConnection = (id, propertyName, propertyValue) => {
            this.setState(state => {
                return {
                    nodes: [...state.nodes.map(node => {
                        if (node.id === id) {
                            node.connection[propertyName] = propertyValue
                        }
                        return node
                    })]
                }
            })
        };

        this.getDbNodes = () => {
            fetch('http://localhost:3000/api/dbnodes')
                .then(response => response.json())
                .then(data => this.setState({
                    zeit: data.zeitlocation,
                    nodes: data.nodes,
                }));
        };

        this.state = {
            zeit: '',
            nodes: [],
            bestNode: '',
            bestTime: '',
            addNode: this.addNode,
            updateConnection: this.updateConnection,
            reloadData: this.getDbNodes,
        };
    }

    componentDidMount() {
        this.getDbNodes();
    }

    render() {
        return (
            <NodesContext.Provider value={this.state}>
                <Header/>
                <Body/>
            </NodesContext.Provider>
        )
    }
}

export default Home;
