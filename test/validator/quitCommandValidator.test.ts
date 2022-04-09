import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import QuitCommandValidator from "../../src/validator/quitCommandValidator"

const commandValidator = new QuitCommandValidator()
const canvas = new Canvas()
let command = new Command("Q")

canvas.set(10, 10)
describe("Test 'QuitCommandValidator' class", () => {
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("Q 2")
  test("Invalid Args", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })
})
