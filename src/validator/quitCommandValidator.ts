import Canvas from "../entity/canvas"
import Command from "../entity/command"
import CommandValidator from "./validator"

export default class QuitCommandValidator extends CommandValidator {
  public constructor () {
    super()
    this.numberOfArgs = [0]
  }

  protected checkTypeOfArgs (command: Command): void {
  }

  protected checkPropertyOfArgs (canvas: Canvas, command: Command): void {
  }

  protected override checkCanvas (canvas: Canvas) {
    // Needless to check canvas here
  }
}
