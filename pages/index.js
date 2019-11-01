import React from 'react'
import Header from "../components/Header";
import Body from "../components/Body";
import {NodesContext} from "../modules/nodes-context";

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

        this.calculateBest = (best) => {
            this.setState({best: best})
        };

        this.state = {
            zeit: '',
            nodes: [],
            best: {
                nodeId: '',
                time: {
                    seconds: 0,
                    nanoseconds: 0,
                }
            },
            addNode: this.addNode,
            updateConnection: this.updateConnection,
            reloadData: this.getDbNodes,
            calculateBest: this.calculateBest,
        };
    }

    componentDidMount() {
        this.getDbNodes();
    }

    render() {
        const {zeit, best} = this.state;
        return (
            <NodesContext.Provider value={this.state}>
                <Header zeit={zeit} best={best}/>
                <Body/>
            </NodesContext.Provider>
        )
    }
}

export default Home;
