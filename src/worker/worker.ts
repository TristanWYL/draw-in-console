import Canvas from "../entity/canvas"
import Command from "../entity/command"

abstract class Worker {
  public abstract do(canvas: Canvas, command: Command) : void
}

export default Worker
