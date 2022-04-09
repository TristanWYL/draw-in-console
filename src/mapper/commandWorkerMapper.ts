import CreateCanvasWorker from "../worker/createCanvasWorker"
import DrawLineWorker from "../worker/drawLineWorker"
import DrawRectangleWorker from "../worker/drawRectangleWorker"
import FillSpaceAroundWorker from "../worker/fillSpaceAroundWorker"
import QuitWorker from "../worker/quitWorker"
import Worker from "../worker/worker"

const commandWorkerMapper: {[key:string]: Worker} = {
  C: new CreateCanvasWorker(),
  Q: new QuitWorker(),
  L: new DrawLineWorker(),
  R: new DrawRectangleWorker(),
  B: new FillSpaceAroundWorker()
}
export default commandWorkerMapper
