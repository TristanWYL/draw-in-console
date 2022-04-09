import Canvas from "../entity/canvas"
import Command from "../entity/command"
import Worker from "./worker"

export default class CreateCanvasWorker extends Worker {
  public do (canvas: Canvas, command: Command): void {
    // reset the canvas before drawing the border
    canvas.reset()
    canvas.set(command.args[0] as number, command.args[1] as number)

    for (let h = 0; h < canvas.height + 2; h++) {
      for (let w = 0; w < canvas.width + 2; w++) {
        if (h === 0 || h === canvas.height + 1) {
          canvas.mark(w, h, "-")
        } else {
          if (w === 0 || w === canvas.width + 1) {
            canvas.mark(w, h, "|")
          }
        }
      }
    }
  }
}
