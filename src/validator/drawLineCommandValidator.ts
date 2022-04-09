import Canvas from "../entity/canvas"
import Command from "../entity/command"
import CommandValidator from "./validator"

export default class DrawLineCommandValidator extends CommandValidator {
  public constructor () {
    super()
    this.numberOfArgs = [4]
  }

  protected checkTypeOfArgs (command: Command): void {
    for (let i = 0; i < command.args.length; i++) {
      const _normlized = Number(command.args[i])
      if (isNaN(_normlized)) throw new Error("Arguments should be all numbers!")
      if (_normlized !== Math.floor(_normlized)) throw new Error("Arguments should be all integers!")
      command.args[i] = _normlized
    }
  }

  protected checkPropertyOfArgs (canvas: Canvas, command: Command): void {
    // should be horizontal or vertical
    if (command.args[0] !== command.args[2] && command.args[1] !== command.args[3]) {
      throw new Error("Currently only horizontal and vertical lines are supported!")
    }
    // should all be inside the canvas
    this.shouldInsideCanvas(canvas, command.args[0] as number, command.args[1] as number)
    this.shouldInsideCanvas(canvas, command.args[2] as number, command.args[3] as number)
  }
}
