class Graph {
  constructor(v) {
    this.vertices = v; // 顶点个数
    this.edges = 0; // 边数
    this.adj = []; // 邻接表数组
    this.marked = []; // 保存顶点是否被访问过
    this.init();
  }

  init() {
    for(let i = 0 ; i < this.vertices ; i++) {
      this.adj[i] = [];
      this.marked[i] = false;
    }
  }

  // 加边
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
    return this;
  }

  // 展示图
  showGraph() {
    for(let i = 0 ; i < this.vertices ; i++) {
      for(let j = 0 ; j < this.vertices ; j++) {
        if(this.adj[i][j]) {
          console.log(i + ' => ' + this.adj[i][j]);
        }
      }
    }
  }

  // 深度优先
  dfs(v) {
    this.marked[v] = true;
    if(this.adj[v]) {
      console.log("visited: " + v);
    }
    this.adj[v].forEach(w => {
      if(!this.marked[w]) {
        this.dfs[w];
      }
    })
  }
  // 广度优先
  bfs(v) {
    let queue = [];
    this.marked[v] = true;
    queue.push(v); // 添加到队尾
    while(queue.length > 0) {
      let v = queue.shift();
      if(v) {
        console.log("visited: " + v);
      }
      this.adj[v].forEach(w => {
        if(!this.marked[w]){
          this.marked[w] = true;
          queue.push(w);
        }
      })
    }
  }
}