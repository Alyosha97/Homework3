2. // Create tree1 and tree2 from nodes (function, which will take argument nodes and returns the tree1/tree2)

function tree(nodes,res = {}) {
    nodes.filter((elem) => {
        elem.children = nodes.filter((item) => item.parentId === elem.id);
        return elem.parentId === null
    }).forEach((elem) => {
        res.id = elem.id;
        res.children = elem.children
    })
    return res
}

