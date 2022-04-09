import Canvas from "../entity/canvas"
import Command from "../entity/command"
import CommandValidator from "./validator"

export default class CreateCanvasCommandValidator extends CommandValidator {
  public constructor () {
    super()
    this.numberOfArgs = [2]
  }

  protected checkTypeOfArgs (command: Command): void {
    const first = Number(command.args[0])
    const second = Number(command.args[1])
    if (isNaN(first) || isNaN(second)) {
      throw new Error("Arguments are not all numbers for creating a canvas!")
    }
    command.args[0] = first
    command.args[1] = second
  }

  protected checkPropertyOfArgs (canvas: Canvas, command: Command): void {
    if (command.args[0] <= 0 || command.args[1] <= 0) { throw new Error("Arguments for creating a canvas should be greater than zero!") }
  }

  protected override checkCanvas (canvas: Canvas) {
    // do nothing here, as at this moment, canvas should be reset in the course of drawing
  }
}
