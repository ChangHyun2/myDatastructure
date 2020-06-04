1st
2nd ( 1st.next )
3rd ( 2nd.next )
last

LIFO

    stack of plates
    stack of books
    ...

    as you pile it up
    the last thing(or the topmost thing) is what gets removed first.

    ex) call stack

    where stacks are used
    - managing function invocations
    - undo / redo
    - Routing ( this history object) is treated like a stack!

    Implementation
        array
             - push / pop
             - unshift / shift
        LinkedList
             - append / deleteTail
             - prepend / deleteHead

big O

    insertion - O(1)
    removal - O(1)
    searching - O(n)
    access - O(n)

RECAP

    LIFO data structure where the last value in is always the first one out.
    stacks are used to handle function invocations( the call stack), for operations like undo/redo, and for routing(remember pages you have visited and go back/forward)
    They are not built in data structure in js, but are relatively simple to implement
