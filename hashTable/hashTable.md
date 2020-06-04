# hash table

1. hash table?
2. hashing algorithm?
3. good hashing algorithm?
4. how collisions occur in a hash table?
5. handle collisions using separate chaining or linear probing

   <br>

## 1. hash table?

- store **key-value** pairs
- like arrays, but **keys are not orderd**
- unlike arrays, hash tables are fast for all of the following operations : **finding** values, **adding** new values, **removing** values
- beacause of speed, hash tables are commonly used!

ex)

- python : dictionaries
- js : objects, maps
- java,go,scala : maps
- ruby : hashes
  **objects have some restrictions, but are basically hash tables**

ex)

imagine we want to store some colors,
['#ff2a3d', '#fa3d2d', ..] : not super readable!

using indices to access the colors, use more human-readable keys.

pink <> #ff69b4
orangeRed <> ##ff4500

colors['cyan'] is way better than colors[2]

but... how can we use 'cyan', or 'pinkred' to find an element? Computer cannot understnad what a 'pink' is. >> hashing

   <br>

## 2. hash algorithm?

to implement a hash table, we'll be using an array.

to look up values by key, we need a way to **convert keys into valid indices** ( hash function ).

wikipedia : hash function, cryptographic hash function

```python
print(hash(input('key : ')))
```

## 3. good hashing algorithm?

- fast ( i.e. constant time)
- doesn't cluster outputs at specific indicies, but distributes uniformly
- deterministic (same input yields same output)

```js
// bad : not fast
function slowHash(key) {
  for (let i = 0; i < 1000; i++) {
    console.log("everyday i'm hashing");
  }
  return key[0].charCodeAt(0);
}

// bad : not uniformly dstributed
function sameHashedValue(key) {
  return 1203912312312312;
}

// bad : non deterministic
function randomHash(key) {
  return Math.floor(Math.random() * 1000000);
}
```
