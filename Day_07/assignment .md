# Currying vs Partial Application vs Point-Free Style

| Aspect                    | **Currying**                                                                 | **Partial Application**                                                 | **Point-Free Style**                                                  |
|---------------------------|------------------------------------------------------------------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|
| **Definition**            | Transforming a function with multiple arguments into a series of unary functions (one argument at a time). | Fixing some arguments of a function to create a new function with fewer arguments. | Writing functions **without explicitly mentioning** the arguments.     |
| **Main Focus**            | Breaking function into a chain of single-argument functions.                | Pre-filling some parameters of a function.                             | Composing functions without referencing data or arguments directly.   |
| **Function Signature**    | `f(a)(b)(c)`                                                                 | `f(a)(b, c)` or similar                                                 | `f = compose(g, h)` (or) `f = map(toUpper)`                           |
| **Example**               | ```js\nconst add = a => b => a + b;\nadd(2)(3); // 5```                      | ```js\nconst add = (a, b) => a + b;\nconst add5 = add.bind(null, 5);\nadd5(3); // 8``` | ```js\nconst upperAll = arr => arr.map(str => str.toUpperCase());\n// Point-free:\nconst upperAll = map(toUpper);``` |
| **Arguments Handling**    | Only one argument per function level.                                       | Accepts multiple arguments; some fixed.                                | Avoids explicitly using parameters.                                   |
| **Reusability**           | High: allows easy reuse with partial calls.                                 | Medium to High: reusable with some arguments pre-applied.              | High: functions composed declaratively.                              |
| **Example Use Case**      | Functional pipelines, composing functions.                                  | API configuration, utility presets.                                    | Clean declarative code (e.g., data transformation pipelines).         |
| **Related to**            | Function transformation                                                      | Function specialization                                                 | Function composition                                                  |
| **Library Support**       | Ramda, Lodash/fp, functional libraries                                       | Ramda, Lodash/fp, custom bind/arrow functions                          | Ramda, RxJS, fp-ts, Lodash/fp                                        |
books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]
