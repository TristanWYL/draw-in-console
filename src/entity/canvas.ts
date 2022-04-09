export default class Canvas {
  private readonly DEFAULT_MARKER: string = ""
  private body: string[][]
  private isValid: boolean
  public width = 0
  public height = 0

  public constructor () {
    this.body = []
    this.isValid = false
  }

  public set (width: number, height: number) {
    this.width = width
    this.height = height
    for (let h = 0; h < height + 2; h++) {
      this.body[h] = []
      for (let w = 0; w < width + 2; w++) {
        this.body[h][w] = this.DEFAULT_MARKER
      }
    }
    this.isValid = true
  }

  public checkValidity (): boolean {
    return this.isValid
  }

  public reset () {
    this.body = []
    this.isValid = false
    this.width = 0
    this.height = 0
  }

  public mark (x: number, y: number, marker: string): void {
    this.body[y][x] = marker
  }

  /**
   * Some assumptions are made to ensure this method runs normally:
   * 1. All points are inside this canvas,
   * 2. Lines are either vertical or horizontal
   * @param x1
   * @param y1
   * @param x2
   * @param y2
   * @param marker
   */
  public drawLine (x1: number, y1: number, x2: number, y2: number, marker: string): void {
    let x = x1
    let y = y1
    if (x1 === x2) {
      // draw a vertical line
      const delta = y2 > y1 ? 1 : y2 < y1 ? -1 : 0
      do {
        this.mark(x, y, marker)
        y += delta
      } while (y !== y2)
      this.mark(x, y, marker)
    } else {
      // draw a horizontal line
      const delta = x2 > x1 ? 1 : x2 < x1 ? -1 : 0
      do {
        this.mark(x, y, marker)
        x += delta
      } while (x !== x2)
      this.mark(x, y, marker)
    }
  }

  /**
   * Some assumptions are made to ensure this method runs normally:
   * 1. All points are inside this canvas,
   * 2. The second point is to the bottom right of the first one
   * @param x1
   * @param y1
   * @param x2
   * @param y2
   * @param marker
   */
  public drawRectangle (x1: number, y1: number, x2: number, y2: number, marker: string): void {
    this.drawLine(x1, y1, x1, y2, marker)
    this.drawLine(x2, y1, x2, y2, marker)
    this.drawLine(x1, y1, x2, y1, marker)
    this.drawLine(x1, y2, x2, y2, marker)
    // process.stdout.write(`${x1},${y1},${x1},${y2}\n`)
    // process.stdout.write(`${x2},${y1},${x2},${y2}\n`)
    // process.stdout.write(`${x1},${y1},${x2},${y1}\n`)
    // process.stdout.write(`${x1},${y2},${x2},${y2}\n`)
  }

  /**
   * Some assumptions are made to ensure this method runs normally:
   * 1. The specified points are inside this canvas,
   * 2. The marker is not an empty string
   * @param x
   * @param y
   * @param marker
   */
  public fillSpaceAround (x: number, y: number, marker: string): void {
    if (this.body[y][x] !== this.DEFAULT_MARKER) throw new Error("The point specified is not blank!")
    this.markConnectedArea(x, y, marker)
  }

  private isInsideCanvas (x: number, y: number): boolean {
    if (x < 1 || x > this.width || y < 1 || y > this.height) {
      return false
    } else return true
  }

  private markConnectedArea (x: number, y: number, marker: string): void {
    if (!this.isInsideCanvas(x, y)) return
    if (this.body[y][x] !== this.DEFAULT_MARKER) return
    this.body[y][x] = marker
    this.markConnectedArea(x, y + 1, marker)
    this.markConnectedArea(x + 1, y, marker)
    this.markConnectedArea(x - 1, y, marker)
    this.markConnectedArea(x, y - 1, marker)
  }

  public print (): void {
    for (let h = 0; h < this.height + 2; h++) {
      for (let w = 0; w < this.width + 2; w++) {
        process.stdout.write(this.body[h][w] === this.DEFAULT_MARKER ? " " : this.body[h][w])
      }
      process.stdout.write("\n")
    }
  }
}
