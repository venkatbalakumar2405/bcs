--

# 📘 JavaScript Class Notes

**Today's Focus**: Variables, Equality, References, Destructuring, Functions, Scope, and Hoisting

---

## ✅ 1. **Box Syntax vs Dot Syntax**

* **Box notation**: `object["key"]`
* **Dot notation**: `object.key`
* Arrays use **index** (`array[0]`), objects use **keys**.

---

## ✅ 2. **Reserved Words and Keywords**

* Keywords like `const`, `let`, `var` are **reserved**.
* **Use `const` > `let` > avoid `var`**

  * `var` is **function-scoped**
  * `let`, `const` are **block-scoped**

---

## ✅ 3. **Equality in JavaScript**

### ⚖️ Double Equal (`==`) vs Triple Equal (`===`)

* `==` → **Allows type coercion**
  Example: `5 == "5"` → `true`
* `===` → **Strict equality (no coercion)**
  Example: `5 === "5"` → `false`
* Triple equals is **faster and safer**
* **Both return true only when types & values match**

> 📘 **TC39** is the official JavaScript specification committee.

---

## ✅ 4. **Copy by Value vs Copy by Reference**

```js
const t1 = [100, 200];
const t2 = [100, 200];
console.log(t1 === t2); // false (different memory addresses)
const t3 = t1;
console.log(t1 === t3); // true (same address)
```

* Arrays & objects are **reference types**.
* Comparing them checks **memory address**, not content.
* Use `spread operator` to copy values:

  ```js
  const z1 = [...t1]; // copy array
  ```

---

## ✅ 5. **Spread and Rest Operators**

### 🌀 Spread (`...`)

* Used to **copy** or **merge**:

  ```js
  const r3 = { ...r1, ...r2 }; // merge objects
  ```

### 🧲 Rest (`...`)

* Used in destructuring to collect **remaining values**:

  ```js
  const [a, b, ...rest] = [10, 20, 30, 40];
  ```

> ⚠️ Rest must be the **last parameter** in function arguments.

---

## ✅ 6. **Destructuring & Default Values**

### 🔍 Object Destructuring

```js
const { name = "Guest", age = 18 } = user;
```

* **Uses keys**, not position.
* Default value is used **only when value is `undefined`**.

### 🧅 Nested Destructuring (Onion Peeling)

```js
const student = {
  name: "Abhishek",
  address: { city: "Trichy", state: "TN" }
};

const { address: { city: c1 = "DefaultCity" } } = student;
console.log(c1); // "Trichy"
```

> Use **default values** to avoid `undefined`.

---

## ✅ 7. **Arrays in Objects**

* You can have arrays inside objects and vice versa:

```js
const student = {
  hobbies: ["cricket", "coding"]
};
```

---

## ✅ 8. **Functions**

### 🔨 Function Declaration

```js
function sum(n1 = 0, n2 = 0) {
  return n1 + n2;
}
```

### 📦 Function Concepts

* **Parameters**: variables in function definition (`n1`, `n2`)
* **Arguments**: actual values passed (`sum(60, 80)`)

### 📥 Collect Extra Arguments

```js
function sum(n1, ...arr) {
  // arr = [60, 70, 90]
}
```

### 🧪 Special Notes

* `undefined + number` → returns **NaN**
* `toFixed()` converts number to **string**

---

## ✅ 9. **Scope**

### 🔐 Types of Scope

| Variable | Scope Type     |
| -------- | -------------- |
| `var`    | Function Scope |
| `let`    | Block Scope    |
| `const`  | Block Scope    |

### Example:

```js
if (true) {
  let a = 10;
}
// a is not accessible outside the block
```

---

## ✅ 10. **Hoisting & Execution Context**

### 🧠 JavaScript Engine

* Executes in **2 phases**:

  1. **Memory Allocation (Hoisting)**

     * Only **declarations** are hoisted (not initializations)
     * `var` is hoisted with `undefined`
     * `let` and `const` are in **Temporal Dead Zone (TDZ)**
  2. **Execution Phase**

     * Runs the code line-by-line

### ❗ TDZ Error

```js
console.log(a); // ReferenceError
let a = 10;
```

> Hoisting only stores variable names, **not values**.

---

## ✅ 11. **Closures & Lexical Scope**

* Function remembers the variables from its **outer scope**.
* This is called a **closure**.
* Scope flows **outer to inner**, not vice versa.

---

## ✅ 12. **Real-Life Scenarios & Tips**

### 🧠 Object Overrides

```js
const book = { year: 2002, price: 1200 };
const fullDetails = { ...book, price: 1500 }; // last one wins
```

> Use **default values first**, then override with API-provided values.

---

## ✅ 13. **Tools & Resources**

* **Carbon** → [https://carbon.now.sh](https://carbon.now.sh)
* **Slide Tools**:

  * Google Slides → Use fade in/out, animate by paragraph
  * **sli.dev** → For Markdown-based slide presentations

---

## ✅ 14. **Miscellaneous Tips**

* Destructuring for cleaner code: `const [a, b, ...rest]`
* Always define **default parameters** in functions
* `Math.round()`, `toFixed()` for formatting numbers
* DRY Principle: Reuse logic through functions


