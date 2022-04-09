import Canvas from "../entity/canvas"
import Command from "../entity/command"
import Worker from "./worker"

export default class QuitWorker extends Worker {
  public do (canvas: Canvas, command: Command): void {
    // reset the canvas before drawing the border
    canvas.reset()
    throw "QUIT"
  }
}
