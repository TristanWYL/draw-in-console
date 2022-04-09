import Canvas from "../entity/canvas"
import Command from "../entity/command"
import CommandValidator from "./validator"

export default class FillSpaceAroundCommandValidator extends CommandValidator {
  public constructor () {
    super()
    this.numberOfArgs = [3]
  }

  protected checkTypeOfArgs (command: Command): void {
    for (let i = 0; i < 2; i++) {
      const _normlized = Number(command.args[i])
      if (isNaN(_normlized)) throw new Error("Arguments should be all numbers!")
      if (_normlized !== Math.floor(_normlized)) throw new Error("Arguments should be all integers!")
      command.args[i] = _normlized
    }
  }

  protected checkPropertyOfArgs (canvas: Canvas, command: Command): void {
    // should be inside the canvas
    this.shouldInsideCanvas(canvas, command.args[0] as number, command.args[1] as number)
    // the marker should be no more than 1 char
    if ((command.args[2] as string).length > 1) throw new Error("The marker should be no more than 1 char!")
  }
}
