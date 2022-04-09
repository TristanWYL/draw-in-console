import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import CommandValidator from "../../src/validator/validator"

const numberOfArgs = 3

class MockCommandValidator extends CommandValidator {
  public constructor () {
    super()
    this.numberOfArgs = [numberOfArgs]
  }

  protected checkTypeOfArgs (command: Command): void {
    // assume all args are integers
    for (let i = 0; i < command.args.length; i++) {
      const _normlized = Number(command.args[i])
      if (isNaN(_normlized)) throw new Error("Arguments should be all numbers!")
      if (_normlized !== Math.floor(_normlized)) throw new Error("Arguments should be all integers!")
      command.args[i] = _normlized
    }
  }

  protected checkPropertyOfArgs (canvas: Canvas, command: Command): void {
  }
}

const commandValidator = new MockCommandValidator()
const canvas = new Canvas()
let command = new Command("L")

describe("Test 'check(canvas: Canvas, command: Command)' method", () => {
  test("Invalid Canvas", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  canvas.set(10, 10)
  command = new Command("XXX")
  test("Unkown Command", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  test("Number of Args Error", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })

  command = new Command("xxx 1 2 3.5")
  test("Args Should All Be Integers", () => {
    expect(() => { commandValidator.check(canvas, command) }).toThrow(Error)
  })
})
