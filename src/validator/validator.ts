import Canvas from "../entity/canvas"
import Command from "../entity/command"

export default abstract class CommandValidator {
  protected numberOfArgs: number[] = []
  private checkNumberOfArgs (command: Command): void {
    if (!this.numberOfArgs.includes(command.args.length)) {
      throw new Error(`Number of args error: expected: ${this.numberOfArgs}, actual: ${command.args.length}`)
    }
  }

  /**
   * Check the type of the args in @param command
   *
   * e.g. some args should be number, while some should be string etc.
   *
   * @param command
   */
  protected abstract checkTypeOfArgs(command: Command): void
  /**
   * Check the properties of args.
   * Some properties are restricted by @param canvas, this is why canvas is passed as an argument here.
   *
   * e.g. the location drawn should be inside the canvas.
   *
   * @param canvas
   * @param command
   */
  protected abstract checkPropertyOfArgs(canvas: Canvas, command: Command): void
  /**
   * Check the validity of the canvas. If the canvas is invalid/unavailable, an error will be thrown.
   * @param canvas canvas to be checked
   */
  protected checkCanvas (canvas: Canvas) {
    if (!canvas.checkValidity()) throw new Error("Canvas should be set up before drawing!")
  }

  protected shouldInsideCanvas (canvas: Canvas, x: number, y: number) {
    if (x < 1 || x > canvas.width || y < 1 || y > canvas.height) throw new Error("Outside of canvas!")
  }

  public check (canvas: Canvas, command: Command): void {
    this.checkCanvas(canvas)
    this.checkNumberOfArgs(command)
    this.checkTypeOfArgs(command)
    this.checkPropertyOfArgs(canvas, command)
  }
}
