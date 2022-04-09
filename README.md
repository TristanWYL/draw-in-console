# How to run the program

1. Make sure the node.js (Testing is passed with ^16.0.0) is installed,
2. git clone https://github.com/TristanWYL/draw-in-console.git
3. cd draw-in-console
4. npm install
5. npm run start

# How to test the program

npm run test

# How to debug the program

Refer to [this gist](https://gist.github.com/TristanWYL/8bc8f9828146b2b9dd8fbbf91b78547e) for instructions.

# Supported commands

| Command | Description|
| ---| ---|
|C w h        |           Should create a new canvas of width w and height h.|
|L x1 y1 x2 y2|   Should create a new line from (x1,y1) to (x2,y2). Currently only horizontal or vertical lines are supported. Horizontal and vertical lines will be drawn using the 'x' character.|
|R x1 y1 x2 y2|   Should create a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2). Horizontal and vertical lines will be drawn                using the 'x' character.|
|B x y c      |         Should fill the entire area connected to (x,y) with "colour" c. The                behavior of this is the same as that of the "bucket fill" tool in paint                programs.|
|Q            |               Should quit the program.|

# How to add a new command

1. Add a new command validator into ./src/validator/, which inherits from the `Validator` class,
2. Add a new worker into ./src/worker/, which inherits from the `Worker` class,
3. Tweak the two mappers in ./src/mapper/, to add relevant mappings for the new command,
   
# Special cases not covered

There should be none.

# Assumptions and how are they handled

So far no assumption is applied, as such you could input anything you want, and the program will handle basically all input.

# Workflow

```mermaid
flowchart TD
A(Waiting for entering) --> B[Validate the input]
A --> | Input | A
B --> C{ Command to exit? }
C --> | Y | D(End)
C --> | N | E[Draw onto the canvas]
E --> F[print]
F --> A
```
# Demo

<img src="demo.gif" style="width:500px">