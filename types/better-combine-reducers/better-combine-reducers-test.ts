import {
	Reducer,
	Action,
	combineReducers
} from 'redux';

interface TestStore {
	a: number;
	b: string;
}

let initialState = {
	a: 0,
	b: ""
}

const firstReducer: (state: number, action: Action) => number = (a, b) => a;

const secondReducer: (state: string, action: Action) => string = (a, b) => a;
const finalReducer: (state: TestStore, action: Action) => TestStore =
	betterCombineReducers(combineReducers)({a: firstReducer, b: secondReducer}, initialState);
