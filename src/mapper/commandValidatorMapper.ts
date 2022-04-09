import CreateCanvasCommandValidator from "../validator/createCanvasCommandValidator"
import DrawLineCommandValidator from "../validator/drawLineCommandValidator"
import DrawRectangleCommandValidator from "../validator/drawRectangleCommandValidator"
import FillSpaceAroundCommandValidator from "../validator/fillSpaceAroundCommandValidator"
import QuitCommandValidator from "../validator/quitCommandValidator"
import CommandValidator from "../validator/validator"

const commandValidatorMapper: {[key:string]: CommandValidator} = {
  C: new CreateCanvasCommandValidator(),
  Q: new QuitCommandValidator(),
  L: new DrawLineCommandValidator(),
  R: new DrawRectangleCommandValidator(),
  B: new FillSpaceAroundCommandValidator()
}

export default commandValidatorMapper
