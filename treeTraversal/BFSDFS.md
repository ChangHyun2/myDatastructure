BFS steps in BST

1. queue(or array)를 create한다.
2. queue의 root node에 위치한다.
3. queue에 다른 node가 있을 떄까지 loop를 돌며
   - node를 dequeue하고, nodes를 저장하는 변수에 push한다.
   - dequeue된left property가 있다면, queue에 add한다.
   - right property가 있다면, queue에 add한다.

```js
        10
    6       15
   3 8        20
```
queue   [10] []   [6,15] [15,3,8] [3,8,20]  []
visited []   [10] [10]   [10,6]   [10,6,15] [10,6,15,3,8,20]

DFS
- preOrder : 깊은 depth부터 탐색하고, left > right 순으로.
- postOrder
- inOrder

DFS / BFS ?

많은 depth를 사용할 경우, DFS는 recursion에 의해 call stack이 쌓이게 됨.
BFS는 push, pop하는 방식으로, 한 depth에서 처리하는 data가 많지 않을 경우, 유리함.
반면, 한 depth에서 처리할 items가 많을 경우, queue에 data가 쌓이게 됨.

DFS-inOrder

일반적으로 BST와 함꼐 사용됨.
lowest에서 highest 순으로 쌓이게 됨.

DFS-preOrder

tree 구조를 그대로 복사할 경우, 또는 flatten할 경우 유용함.
root부터 시작함.


