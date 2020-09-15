import {Count} from './types';

export * from './actions';
export * from './reducers';
export * from './operations';
export * from './selectors';

export type State = {
  count: Count;
};

export const initialState: State = {
  count: 0,
};
