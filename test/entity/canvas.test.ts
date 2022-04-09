import Canvas from "../../src/entity/canvas"

const canvas = new Canvas()
const width = 2
const height = 10

describe("Test 'Canvas' class", () => {
  test("Check a canvas without initialization", () => {
    expect(canvas.checkValidity()).toBe(false)
    expect(canvas.width).toBe(0)
    expect(canvas.height).toBe(0)

    canvas.set(width, height)
    canvas.reset()
    expect(canvas.checkValidity()).toBe(false)
    expect(canvas.width).toBe(0)
    expect(canvas.height).toBe(0)
  })
})
