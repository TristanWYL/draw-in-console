import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import QuitWorker from "../../src/worker/quitWorker"

const worker = new QuitWorker()
const canvas = new Canvas()
const command = new Command("Q")

describe("Test 'QuitWorker' class", () => {
  test("Should Throw 'QUIT'", () => {
    expect(() => {
      worker.do(canvas, command)
    }).toThrow("QUIT")
  })
})
