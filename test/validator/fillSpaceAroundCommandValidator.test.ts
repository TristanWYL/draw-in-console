import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import FillSpaceAroundCommandValidator from "../../src/validator/fillSpaceAroundCommandValidator"

const commandValidator = new FillSpaceAroundCommandValidator()
const canvas = new Canvas()
let command = new Command("B")

canvas.set(10, 10)
describe("Test 'FillSpaceAroundCommandValidator' class", () => {
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("B 2 2 3 3")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("B 2 X 2")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("B 2 -2 3")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("B 2 2.1 3")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  canvas.reset()
  test("Invalid Canvas", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })
})
