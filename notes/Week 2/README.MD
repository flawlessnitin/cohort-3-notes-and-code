##### **Lecture 2.1 - Async JS**

# Introduction

### Shoutouts

Web based wallets (\$50 each)

<https://x.com/kairveee/status/1822263287079174271>

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1633320d-e7d0-4e5c-98c4-9af413385ef3%2FScreenshot_2024-08-10_at_7.35.07_PM.png?table=block\&id=285fb465-6c14-49bb-8982-8fa079bdd6c5\&cache=v2 "notion image")

<https://x.com/DweetParikh/status/1822249456664019332>

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fadc21d89-9352-4bbe-8b11-00e50f2d4a9d%2FScreenshot_2024-08-10_at_6.56.45_PM.png?table=block\&id=d2aad870-f0d8-40a8-a0a6-94adedbe535d\&cache=v2 "notion image")

* Reports Platform (\$100 for creator) - <https://report-100xdevs.vercel.app/>

### Goal of todays class -

1. I/O tasks

1) Callbacks

1. Functional arguments

1) Async vs Sync code

1. Event loops, callback queues, JS

#### Goal of tomorrows class

1. Async await, Promises

1) Practising async JS

 

**Hopefully, by the end of the class, you are able to understand the following code -**&#x20;

Functional arguments

```JavaScript
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(doOperation(1, 2, sum))
```

Callbacks

```TypeScript
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
```

# Normal functions in JS

The way to write functions in JS is as follows -&#x20;

### Find sum of two numbers

```JavaScript
function sum(a, b) {
	return a + b;
}

let ans = sum(2, 3)
console.log(sum);
```

### Find sum from 1 to a number

```JavaScript
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans = sum(100);
console.log(ans);
```

# Synchronous code

Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one.

For example

```JavaScript
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
```

# I/O heavy operations

**I/O (Input/Output) heavy operations** refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.

#### Examples of I/O Heavy Operations:

1. Reading a file

1) Starting a clock

1. HTTP Requests

 

💡

We’re going to introduce imports/requires next. A `require` statement lets you import code/functions export from another file/module.

 

Let’s try to write code to do an `I/O` heavy operation -&#x20;

1. Open repl.it

1) Create a file in there (a.txt) with some text inside

1. Write the code to read a file `synchronously`

```JavaScript
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

```

1. Create another file (b.txt)

1) Write the code to read the other file `synchronously`

```JavaScript
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);
```

What is wrong in this code above?



# I/O bound tasks vs CPU bound tasks

### CPU bound tasks

CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.

```JavaScript
let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	
```

💡

A real world example of a CPU intensive task is `running for 3 miles`. Your legs/brain have to constantly be engaged for 3 miles while you run.

### I/O bound tasks

I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O operations to complete.

```JavaScript
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

```

💡

A real world example of an I/O bound task would be `Boiling water`. I don’t have to do much, I just have to put the water on the kettle, and my brain can be occupied elsewhere.



# Doing I/O bound tasks in the real world

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4d839fba-99ef-4a34-b385-f679059f75ab%2FJcuzELw7SaKCtM0lvAo-cA.jpeg?table=block\&id=84bd8042-2c99-4ef5-973f-edf37d04a049\&cache=v2 "notion image")

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F0e6e18c7-9d28-4cac-8a9f-81ad0dcd248d%2Fz_f9HDD7RFmY3QrFeVpzhA.jpeg?table=block\&id=a1c34bd6-c838-440c-b97a-3e147a446876\&cache=v2 "notion image")

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F033931b1-342a-493c-be2a-95e4bc202f83%2F588W0yO5Spa8SL4Uqdyzmw.jpeg?table=block\&id=88992116-ae6d-44f7-b0e8-468b1a28340c\&cache=v2 "notion image")

What if you were tasked with doing 3 things

1. Boil some water.

1) Do some laundry

1. Send a package via mail

&#x20;Would you do these&#x20;

1. One by one (synchronously)

1) Context switch between them (Concurrently)

1. Start all 3 tasks together, and wait for them to finish. The first one that finishes gets catered to first.

 

💡

Good talk - Concurrency is not parallelism  - <https://www.youtube.com/watch?v=oV9rvDllKEg>

### Synchronously (One by one)

```JavaScript
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

const contents3 = fs.readFileSync("b.txt", "utf-8");
console.log(contents3);
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1f5c8758-8659-4af9-9e83-129cc504bf93%2FScreenshot_2024-08-10_at_6.35.54_PM.png?table=block\&id=44149294-43d5-4614-b31f-15f8d9aa0ded\&cache=v2 "notion image")

 

### Start all 3 tasks together, and wait for them to finish.

```JavaScript
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F26968ae9-1e84-4b7a-8287-660ab511cd13%2FScreenshot_2024-08-10_at_6.36.25_PM.png?table=block\&id=bb6b7285-c8a2-4cb2-8412-f042c44cf956\&cache=v2 "notion image")





# Functional arguments

Write a `calculator` program that adds, subtracts, multiplies, divides two arguments.

### Approach #1

Calling the respective function

```JavaScript
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(sum(1, 2))
```

### Approach #2

Passing in what needs to be done as an argument.

```JavaScript
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(doOperation(1, 2, sum))
```



# Asynchronous code, callbacks

Let’s look at the code to read from a file `asynchronously`. Here, we pass in a `function` as an `argument`. This function is called a `callback` since the function gets `called` `back` when the file is read&#x20;

 ![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7228c0d3-27b1-4a85-b374-6738f3eacf2e%2FScreenshot_2024-08-10_at_6.43.49_PM.png?table=block\&id=affee6d5-62a1-43e3-bb14-17a0e27c79e0\&cache=v2 "notion image")

```JavaScript
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
```

### setTimeout

setTimeout is another asynchronous function that executes a certain code after some time

```JavaScript
function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");
```

# JS Architecture for async code

How JS executes asynchronous code - <http://latentflip.com/loupe/>

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F6990879d-ab77-4d93-993e-90366256fe54%2FScreenshot_2024-08-10_at_7.08.49_PM.png?table=block\&id=fd766e43-ff67-44fb-a1a3-92b438f25c3e\&cache=v2 "notion image")

#### **1. Call Stack**

* &#x20;The call stack is a data structure that keeps track of the function calls in your program. It operates in a "Last In, First Out" (LIFO) manner, meaning the last function that was called is the first one to be executed and removed from the stack.

- When a function is called, it gets pushed onto the call stack. When the function completes, it's popped off the stack.

Code

```JavaScript
function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();
```

#### **2. Web APIs**

* Web APIs are provided by the browser (or the Node.js runtime) and allow you to perform tasks that are outside the scope of the JavaScript language itself, such as making network requests, setting timers, or handling DOM events.

#### **3. Callback Queue**

The callback queue is a list of tasks (callbacks) that are waiting to be executed once the call stack is empty. These tasks are added to the queue by Web APIs after they have completed their operation.

#### 4. Event loop

The event loop constantly checks if the call stack is empty. If it is, and there are callbacks in the callback queue, it will push the first callback from the queue onto the call stack for execution.

