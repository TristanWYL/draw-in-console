import PromptSync from "prompt-sync"
import Canvas from "./entity/canvas"
import Command from "./entity/command"

const _prompt = PromptSync({ sigint: true })
const canvas: Canvas = new Canvas()

// eslint-disable-next-line no-constant-condition
while (true) {
  const input = _prompt("enter command: ")
  // let input = "C 2 1"
  try {
    const command = new Command(input)
    command.validate(canvas)
    command.execute(canvas)
    canvas.print()
  } catch (e) {
    if (typeof e === "string") {
      process.stdout.write(e.toUpperCase() + "\n") // works, `e` narrowed to string
      if (e === "QUIT") break
    } else if (e instanceof Error) {
      process.stdout.write(e.message + "\n") // works, `e` narrowed to Error
    }
  }
}
