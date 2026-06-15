https://www.geeksforgeeks.org/javascript/javascript-coding-questions-and-answers/

Event loop
Closures
Debounce
Polyfills
Promises
Async/await


1. Event Loop Output
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

Question:
What is the output?

2. Closure Question
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();

fn();
fn();
fn();

3. this Keyword
const user = {
  name: "John",

  greet() {
    console.log(this.name);
  }
};

const fn = user.greet;

fn();

4. Hoisting
console.log(a);

var a = 10;

5. Temporal Dead Zone
console.log(a);

let a = 20;

6. Promise Chain
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("Error");
  })
  .catch(() => 100)
  .then((x) => console.log(x));

7. Async Await
async function test() {
  console.log(1);

  await Promise.resolve();

  console.log(2);
}

console.log(3);

test();

console.log(4);

8. Array Map Mutation
const arr = [1, 2, 3];

const result = arr.map((num) => {
  if (num > 1) return;
  return num * 2;
});

console.log(result);

9. Object Reference
const a = { name: "John" };

const b = a;

b.name = "Doe";

console.log(a.name);

10. Shallow Copy
const obj1 = {
  user: {
    name: "Alex"
  }
};

const obj2 = { ...obj1 };

obj2.user.name = "Sam";

console.log(obj1.user.name);


11. setTimeout in Loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

Follow-up:
How to print 0 1 2?


12. Type Coercion
console.log([] + []);
console.log([] + {});
console.log({} + []);


13. Debounce Implementation
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}


14. Polyfill for map
Array.prototype.myMap = function(cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};


15. Flatten Array
const arr = [1, [2, [3, [4]]]];

Implement flatten function.

React Snippet Questions


16. useEffect Dependency
useEffect(() => {
  console.log("Effect");
}, []);

Question:
When does this run?


17. Infinite Re-render
function App() {
  const [count, setCount] = useState(0);

  setCount(count + 1);

  return <div>{count}</div>;
}

Question:
What happens?


18. Key Prop
{
  users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ));
}

Question:
Why is using index as key bad?


19. React.memo
const Child = React.memo(() => {
  console.log("Child Render");

  return <div>Child</div>;
});

Question:
When does it re-render?


20. Controlled Component
<input value={name} onChange={handleChange} />

Question:
Why is this called controlled?


21. State Update Async Nature
const [count, setCount] = useState(0);

setCount(count + 1);
setCount(count + 1);

console.log(count);

Question:
Final value?


22. useCallback vs useMemo

Question:
Difference with examples.


23. Cleanup Function
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => clearInterval(timer);
}, []);

Question:
Why cleanup important?


24. Prop Drilling

Question:
How to avoid it?


25. Lifting State Up

Question:
When should state be lifted?