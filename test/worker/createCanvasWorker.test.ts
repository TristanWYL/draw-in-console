import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import CreateCanvasCommandValidator from "../../src/validator/createCanvasCommandValidator"
import CreateCanvasWorker from "../../src/worker/createCanvasWorker"

const worker = new CreateCanvasWorker()
const validator = new CreateCanvasCommandValidator()
const canvas = new Canvas()
const width = 2
const height = 10
const command = new Command(`C ${width} ${height}`)
validator.check(canvas, command)

describe("Test 'CreateCanvasWorker' class", () => {
  test("Check Canvas Size", () => {
    worker.do(canvas, command)
    expect(canvas.checkValidity()).toBe(true)
    expect(canvas.width).toBe(width)
    expect(canvas.height).toBe(height)
  })
})
