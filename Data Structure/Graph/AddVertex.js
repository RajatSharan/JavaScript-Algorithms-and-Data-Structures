class Graph{

    constructor(){
        this.adjacencylist={}

    }
    addVertex(vertex){
        if(!this.adjacencylist[vertex]) this.adjacencylist[vertex]=[]
    }

    addEdge(v1,v2){
        this.adjacencylist[v1].push(v2)
        this.adjacencylist[v2].push(v1)
    }
    removeEdge(v1,v2){
        this.adjacencylist[v1]=this.adjacencylist[v1].filter(v=>v !== vertex2);
        this.adjacencylist[v1]=this.adjacencylist[v1].filter(v=>v !== vertex1);
    }
}

let g= new Graph()
g.addVertex("Tokyo")