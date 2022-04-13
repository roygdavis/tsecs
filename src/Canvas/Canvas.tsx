import * as React from 'react';

interface CanvasProps {
  context: React.RefObject<HTMLCanvasElement>;
}

export const Canvas = ({ context }: CanvasProps) => {
  return (<canvas ref={context} style={{ width: "100%", height: "100%" }} ></canvas>)
}

// const mouseMoveHandler = (x: number, y: number, state: AppState, setState: SetStateHandler, canvasRef: React.RefObject<HTMLCanvasElement>) => {
//     state.snakeHeadPosition = { x: x, y: y } as BodyCoOrds;
//     setState(state);
// }