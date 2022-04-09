import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import CreateCanvasCommandValidator from "../../src/validator/createCanvasCommandValidator"

const commandValidator = new CreateCanvasCommandValidator()
const canvas = new Canvas()
let command = new Command("C")

describe("Test 'CreateCanvasCommandValidator' class", () => {
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("C 2")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("C 2 X")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("C 2 -2")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })
})
