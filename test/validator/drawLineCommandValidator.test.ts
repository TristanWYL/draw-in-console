import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import DrawLineCommandValidator from "../../src/validator/drawLineCommandValidator"

const commandValidator = new DrawLineCommandValidator()
const canvas = new Canvas()
let command = new Command("L")

canvas.set(10, 10)
describe("Test 'DrawLineCommandValidator' class", () => {
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("L 2 2 3 3")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("L 2 X 2 2")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("L 2 -2 3 3")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("L 2 2.1 3 3")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  canvas.reset()
  test("Invalid Canvas", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })
})
