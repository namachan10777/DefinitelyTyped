import * as Redux from 'redux';

export type PreloadedState<S> = Redux.DeepPartial<S>;

export type combineReducersA<S> = (reducers: Redux.ReducersMapObject<S, any>) => Redux.Reducer<S>;
export type combineReducersB<S, A extends Redux.Action = Redux.AnyAction> = (reducers: Redux.ReducersMapObject<S, A>) => Redux.Reducer<S, A>;

export default function betterCombineReducers<S>
    (original: combineReducersA<S>):
    (reducers: Redux.ReducersMapObject<S, any>, initialState: PreloadedState<S>) =>
    Redux.Reducer<S>;

export default function BetterCombineReducers<S, A extends Redux.Action = Redux.AnyAction>
    (original: combineReducersB<S, A>):
    (reducers: Redux.ReducersMapObject<S, A>, initialState: PreloadedState<S>) =>
    Redux.Reducer<S, A>;
