import Canvas from "../entity/canvas"
import Command from "../entity/command"
import Worker from "./worker"

export default class DrawRectangleWorker extends Worker {
  public do (canvas: Canvas, command: Command): void {
    canvas.drawRectangle(command.args[0] as number, command.args[1] as number, command.args[2] as number, command.args[3] as number, "x")
  }
}
