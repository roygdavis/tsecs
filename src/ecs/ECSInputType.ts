import { ECSType } from "./ECSType";


export interface ECSInputType<T> extends ECSType<T, KeyboardEvent> {

}

export enum InputAction {
  Up,
  Down,
  Left,
  Right,
  Fire,
  Quit,
  None
}