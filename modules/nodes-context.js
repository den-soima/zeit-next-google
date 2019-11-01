import React from "react";

export const NodesContext = React.createContext({
    nodes: [],
    addNode: (node) => {},
    updateNode: (id, connection) => {},
});
