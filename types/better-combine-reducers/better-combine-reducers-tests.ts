import { Reducer, Action, combineReducers } from 'redux';
import better from 'better-combine-reducers';

interface TestStore {
    a: number;
    b: string;
}

let initialState = {
    a: 0,
    b: ""
}

const AReducer: (state: number, action: Action) => number = (a, b) => a;
const BReducer: (state: string, action: Action) => string = (a, b) => a;

const reducer: (state: TestStore, action: Action) => TestStore =
    better(combineReducers)({a: AReducer, b: BReducer}, initialState);
