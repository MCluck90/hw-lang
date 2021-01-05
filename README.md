# HW

The ultimate language for printing Hello World!

## Installation

```
$ npm i -g hw-lang
```

## Usage

```shell
$ hw file.hw
```

## Example

_example.hw_
```
cH
```

```shell
$ hw example.hw # Hello, world
```

## Language

HW recognizes 5 commands:

1. `c`: place a comma between the words "hello" and "world"
2. `e`: place an exclamation point(!) at the end
3. `n`: print a newline
4. `H`: print "Hello" instead of "hello"
5. `W`: print "World" instead of "world"

Commands can be placed in any order. All other characters are ignored and can be used as comments.
