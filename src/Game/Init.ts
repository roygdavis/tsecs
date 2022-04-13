import { ECSInputType, InputAction } from "../ecs/ECSInputType";
import { ECSRenderType } from "../ecs/ECSRenderType";
import { HighScoreState } from "./States/HighScoreState";

export const InitHighScore = {
  name: "HighScore",
  updateMethod: (state: HighScoreState) => {
    state.currentScore++;
    if (state.currentScore > state.highScore) state.highScore = state.currentScore;
  },
  actionMethod: (state: HighScoreState, context: CanvasRenderingContext2D) => {
    context.font = "30px Comic Sans MS";
    context.fillStyle = "red";
    context.textAlign = "center";
    context.fillText(`Score: ${state.currentScore}   High Score: ${state.highScore}`, 850, 50);
  },
  state: { highScore: 0, currentScore: 0 } as HighScoreState,
  renderType: true
} as ECSRenderType<HighScoreState>

export const InitKeyHandler = {
  name: "KeyHandler",
  updateMethod: (state: InputAction) => {

  },
  actionMethod: (state: InputAction, context: KeyboardEvent) => {
    console.log(context.code);
    switch (context.code) {
      case "Space": {
        state = InputAction.Fire;
        break;
      }
      default: {
        state = InputAction.None;
        break;
      }
    }
  },
  state: InputAction.None,
  renderType: false
} as ECSInputType<InputAction>