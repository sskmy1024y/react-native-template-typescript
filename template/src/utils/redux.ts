export interface TypedAction<A extends string, T> {
  type: A;
  payload: T;
}
