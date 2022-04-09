import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import commandValidatorMapper from "../../src/mapper/commandValidatorMapper"
import commandWorkerMapper from "../../src/mapper/commandWorkerMapper"

const c = "X"
const arg1 = "arg1"
const arg2 = "arg2"
const arg3 = "arg3"
const command = new Command(` ${c} ${arg1}  ${arg2}  ${arg3} `)

describe("Test 'Command' class", () => {
  test("Check command construction", () => {
    expect(command.command).toBe(c)
    expect(command.args[0]).toBe(arg1)
    expect(command.args[1]).toBe(arg2)
    expect(command.args[2]).toBe(arg3)
  })

  test("Check validator", () => {
    expect(c in commandValidatorMapper).toBe(false)
    const canvas = new Canvas()
    expect(() => { command.validate(canvas) }).toThrow(Error)
  })

  test("Check worker", () => {
    expect(c in commandWorkerMapper).toBe(false)
    const canvas = new Canvas()
    expect(() => { command.execute(canvas) }).toThrow(Error)
  })
})
