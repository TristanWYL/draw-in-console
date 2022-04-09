import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import DrawRectangleCommandValidator from "../../src/validator/drawRectangleCommandValidator"

const commandValidator = new DrawRectangleCommandValidator()
const canvas = new Canvas()
let command = new Command("R")

canvas.set(10, 10)
describe("Test 'DrawRectangleCommandValidator' class", () => {
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("R 2 2 3 3")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("R 2 X 2 2")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("R 2 -2 3 3")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("R 2 2.1 3 3")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("R 2 2 1 1")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  canvas.reset()
  test("Invalid Canvas", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })
})
