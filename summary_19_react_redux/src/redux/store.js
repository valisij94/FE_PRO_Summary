import { applyMiddleware, combineReducers, createStore } from "redux";
import { themesReducer } from "./theme/themeReducer";
import { postsReducer } from "./posts/postsReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers( {
  theme: themesReducer,
  posts: postsReducer
} )

export const store = createStore(rootReducer, applyMiddleware(thunk));
