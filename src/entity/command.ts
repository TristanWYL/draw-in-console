import Canvas from "./canvas"
import commandWorkerMapper from "../mapper/commandWorkerMapper"
import commandValidatorMapper from "../mapper/commandValidatorMapper"

export default class Command {
  public command: string
  public args: Array<string | number>
  public constructor (private input: string) {
    const items: string[] = []
    input.trim().split(" ").forEach(i => {
      if (i.length === 0) return
      items.push(i)
    })
    this.command = items[0]
    this.args = items.slice(1)
  }

  public validate (canvas: Canvas): void {
    if (!(this.command in commandValidatorMapper)) {
      const seperator = "\n    - "
      throw new Error(`Unknown commands: ${this.input}! Only following commands are supported: ${seperator + Object.keys(commandValidatorMapper).join(seperator)}`)
    }
    commandValidatorMapper[this.command].check(canvas, this)
  }

  public execute (canvas: Canvas): void {
    if (!(this.command in commandWorkerMapper)) {
      throw new Error(`Unknown commands: ${this.input}!`)
    }
    commandWorkerMapper[this.command].do(canvas, this)
  }
}
