---
title: w01-Lab2
tag: lab
---

# Golang Basics Part I

***warnning : We will use go 1.19.13 same version as the grader***

### Overview

- Go language is a programming language initially developed
at Google in the year 2007 by Robert Griesemer, Rob Pike,
and Ken Thompson.
- Statically-typed language with dynamic-typing capability
- Syntax similar to that of C
- Garbage collection, Type safety
- Many  advanced  built-in  types  (e.g. variable, length, arrays, key, value, maps)
- Rich standard library

### Pain Point

- Conceived as an answer to some of the problems at Google.
- Today's server programs comprise tens of
millions of lines of code, are worked on by
hundreds or even thousands of programmers,
and are updated literally every day.
- build times, even on large compilation clusters,
have stretched to many minutes, even hours

### Goal

- Eliminate the slowness and clumsiness of software development at Google
- Make the process more productive and scalable.
- Designed by and for people who write—and read and debug and maintain—large software systems
- The feel of a dynamic language with the safety of a static type system
- Compile to machine language so it runs fast
- Real run-time that supports Garbage Collection, concurrency
- Lightweight, flexible type system
- Has methods but not a conventional OO language

### Who’s Using Go?

- Google
- Heroku
- Canonical
- Soundcloud
- Bitly
- Cloudflare
- Iron.io
- TinkerCAD
- Drone.io

### Features Excluded Intentionally

- Support for type inheritance
- Support for method or operator overloading
- Support for circular dependencies among packages
- Support for pointer arithmetic
- Support for assertions

### SYNTAX

- Hello, world

    ```go
    package main
    import "fmt"
    func main() {
        fmt.Println("Hello, world!")
    }
    ```

- Run Directly

    ```bash
    $ go run hello.go
    Hello, world!
    ```

- go run vs go build

  - go run
    - Compiles and runs files directly.
    - No intermediate binary generated.
    - Used for quick development and testing.
  - go build
    - Generates an executable binary.
    - Requires a build step.
    - Used for distribution and deployment

- Comments

```go
// Single line comment

 /* Multi
 line comment */
```

- Greeting

```go
package main
 import (
    "fmt"
    "time"
 )
 func main() {
    fmt.Println(greeting())
 }
 // greeting returns a pleasant, semi-useful greeting.
 func greeting() string {
    return "Hello world, the time is: " +
        time.Now().String()
 }
```

- Syntax Overview
  - Basically C-like with reversed types and declarations,
  - plus keywords to introduce each type of declaration

  ```go
  var a int
  var b, c *int  // note difference from C
  var d []int
  type S struct { a, b int }
  // Basic control structures are familiar:
  if a == b { return true } else { return false }
  for i := 0; i < 10; i++ { ... }
  // Note: no parentheses, but braces required.
  // In practice, Go code almost never has
  // semicolons outside for and if clauses.
  ```

- Data Types
  - Basic type: Numbers (integers, floats, complex), strings, and booleans
  - Aggregate type: Array and structs
  - Reference type: Pointers, slices, maps, functions, and channels
  - Interface type

- BASIC TYPES
  - Numerics

  ```go
  num := 3              // int
  num := 3.             // float64
  num := 3 + 4i         // complex128
  num := byte('a')      // byte (alias: uint8)
  var u uint = 7        // uint (unsigned)
  var p float32 = 22.7  // 32-bit floa
  ```

    |       |              |         |            |
    |:-----:|:------------:|:-------:|:----------:|
    |  int  |     uint     |         |            |
    |  int8 | uint8 = byte |         |            |
    | int16 |    uint16    |         |            |
    | int32 |    uint32    | float32 |  complex64 |
    | int64 |    uint64    | float64 | complex128 |

int and uint are platform dependent - 32 bit on 32-bit machine and 64 bit on 64-bit machine <br/>
Also uintptr, an integer big enough to store a pointer. <br/>
Immutable - can be reassigned but not edited

- Numeric Data Type Ranges

    |**Size** |**Type**|**Range**                           | **Type**   | **Range**    |
    |:-------:|:-----:|-------------------------------------|--------|----------|
    |  8 bits |  int8 | -128 to 127                         | uint8  | 0 to 255 |
    | 16 bits | int16 | -2<sup>15</sup> to 2<sup>15</sup>-1 | uint16 | 0 to 2<sup>16</sup>-1    |
    | 32 bits | int32 | -2<sup>31</sup> to 2<sup>31</sup>-1 | uint32 | 0 to 2<sup>32</sup>-1    |
    | 64 bits | int64 |-2<sup>ุ-63</sup> to 2<sup>63</sup>-1 | uin64  | 0 to 2<sup>64</sup>-1    |
    |         |  int  |Platform dependent                   | uint   | Platform dependent|

- Numeric Literals
  - Numeric constants are "ideal numbers"

    ```go
    077  // octal
    0xFEEDBEEEEEEEEEEEEEEEEEEEEF  // hexadecimal
    1 << 100

    // integer and floating-point ideal numbers;
    // syntax of literal determines type:

    1.234e5   // floating-point
    1e2       // floating-point
    3.2i      // imaginary floating-point
    100       // integer
    ```

- Consequences of ideal numbers
  - Constants must be representable in their type. Example: ^0 is -1 which is not in range 0-255.

    ```go
    uint8(^0)   // bad: -1 can't be represented
    ^uint8(0)   // OK
    uint8(350)  // bad: 350 can't be represented
    uint8(35.0) // OK: 35
    uint8(3.5)  // bad: 3.5 can't be represented
    ```

- Booleans

    ```go
    isTrue:= true
    isFalse := false
    // Operators
    fmt.Println(true && true)   // true
    fmt.Println(true && false)  // false
    fmt.Println(true || true)   // true
    fmt.Println(true || false)  // true
    fmt.Println(!true)          // false
    ```
- Operators
    ```go
    x := 5
    x++
    fmt.Println("x + 4 =", x+4)     // 10
    fmt.Println("x * 4 =", x*4)     // 24
    fmt.Println("x / 4 =", x/4)     // 1
    // int/int = round-towards-zero division 
    // not the same as '//' - floor division in python
    fmt.Println("-x / 4 =", -x/4)   // so -6/4 is -1
    // in python -6//4 is -2
    ```
    | **Priority** |    **Note**    |      **Oparators**     |                   |
    |:------------:|:--------------:|:----------------------:|:-----------------:|
    |       1      | Multuplicative | *&nbsp;&nbsp; /&nbsp;&nbsp;  %&nbsp;&nbsp;  <<&nbsp;&nbsp;  >>&nbsp;&nbsp;  &&nbsp;&nbsp;  &^&nbsp;&nbsp; | `&^` is "bit clear" |
    |       2      |    Additive    |       +&nbsp;&nbsp;  -&nbsp;&nbsp;  \|&nbsp;&nbsp;  ^&nbsp;&nbsp;      |    `^` is " xor "   |
    |       3      |   Comparison   |  ==&nbsp;&nbsp;  !=&nbsp;&nbsp;  <&nbsp;&nbsp;  <=&nbsp;&nbsp;  >&nbsp;&nbsp;  >=  |                   |
    |       4      |       And      |           &&           |                   |
    |       5      |       Or       |          \|\|          |                   |
    
    Unary operators – higher priory than binary i.e. & * ! + - ^ (bitwise complement)




<!-- String -->