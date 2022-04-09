import Canvas from "../../src/entity/canvas"
import Command from "../../src/entity/command"
import DrawLineCommandValidator from "../../src/validator/drawLineCommandValidator"
import DrawLineWorker from "../../src/worker/drawLineWorker"

const worker = new DrawLineWorker()
const validator = new DrawLineCommandValidator()
const canvas = new Canvas()
canvas.set(10, 10)
const x1 = 2
const y1 = 8
const x2 = 3
const y2 = 8
const command = new Command(`L ${x1} ${y1} ${x2} ${y2}`)
validator.check(canvas, command)

describe("Test 'DrawLineWorker' class", () => {
  test("Check Canvas Size", () => {
    worker.do(canvas, command)
  })
})
