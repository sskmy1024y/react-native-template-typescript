import * as Count from './count';
import * as redux from 'redux';

export interface RootState {
  count: Count.State;
}

export const initialState: RootState = {
  count: Count.initialState,
};

export const rootReducer = redux.combineReducers<RootState>({
  count: Count.reducer,
});
