//type EntityState<T, K extends keyof T> = { [P in K]: T[P]; }
export type EntityState<T> = { [P in keyof T]: T[P]; }

export interface ECSType<T1, T2> {
  name: string;
  updateMethod: (state: T1) => void;
  actionMethod: (state: T1, context: T2) => void;
  state: EntityState<T1>;
  renderType: boolean;
}