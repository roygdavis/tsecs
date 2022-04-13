import React from 'react';
import './App.css';
import { Canvas } from './Canvas/Canvas';
import { ECSInputType } from './ecs/ECSInputType';
import { ECSRenderType } from './ecs/ECSRenderType';
import { InitHighScore, InitKeyHandler } from './Game/Init';

function App() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const ecs = [InitHighScore, InitKeyHandler];
  
  window.requestAnimationFrame(()=> AnimationFrameHandler(ecs.filter(x=>x.renderType) as ECSRenderType<any>[],canvasRef));
  window.onkeydown = (e: KeyboardEvent) => { 
    KeyboardHandler(e, ecs.filter(x => !x.renderType) as ECSInputType<any>[]);
  };
  return (
    <div className="App">
      <Canvas context={canvasRef}></Canvas>
    </div>
  );
}

const AnimationFrameHandler = (ecs: Array<ECSRenderType<any>>, canvasRef: React.RefObject<HTMLCanvasElement>) => {
  ecs.forEach(x => x.updateMethod(x.state));

  const current = canvasRef.current;
  if (current) {
    const context = current.getContext("2d");
    if (context) {
      UpdateCanvasSize(current, context);
      context.fillStyle = "white";
      context.fillRect(0, 0, current.width, current.height);
      ecs.forEach(x => x.actionMethod(x.state, context));
    }
  }
  window.requestAnimationFrame(() => AnimationFrameHandler(ecs, canvasRef));
}

const UpdateCanvasSize = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
  const { width, height } = canvas.getBoundingClientRect();
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
  }
};

const KeyboardHandler =  (e: KeyboardEvent,ecs:Array<ECSInputType<any>>) => {
  ecs.forEach(x => x.actionMethod(x.state, e));
}

export default App;
