
# tree?

- compare trees & lists
- differences between trees & binary trees & binary search trees(BST)
- implement BST

linear data structure : lists, stacks, arrays, queues
nonlinear(hierarchical) data structure : trees

## trees

- root : 최상단에 위치하는 node로, tree는 반드시 한 개 root를 가진다.
- parent & children(child) : root(top node)로부터 시작해, tree의 parent node는 children을 subtree로 가진다.
- siblings : 같은 depth에 위치한 nodes. siblings는 서로 연결될 수 없다.(오직 parent & child 관계만 존재한다.)
- leaf : child가 없는 node
- edge : 서로 다른 두 node의 연결 (branch)


낮은 depth(root에 가까운)에 있는 node를 child로 가질 수 없다.
node는 단 하나의 부모를 가질 수 있다.
nonconnected node가 없어야 한다.

위 조건들에 의해 자신의 node로 되돌아오는 'cycle'이 발생하지 않는다.
    

tree 구조에 속하는 singly linked list의 length는 tree의 depth가 된다.

## tree example
  - HTML DOM
  - network routing 
  - [Abstract Syntax Trees](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
  - [Artificial intelligence](https://towardsdatascience.com/tic-tac-toe-creating-unbeatable-ai-with-minimax-algorithm-8af9e52c1e7d) 
  - Folders in Operating Systems
  - Computer File Systems

## kinds of Trees

- trees
- binary trees : max(children) = 2
- binary search trees : order에 의해 sorted된 binary tree 
  - parent > child so, root = max
  - parent < child so, root = min



