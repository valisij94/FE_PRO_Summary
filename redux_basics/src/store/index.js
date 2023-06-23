import { createStore, combineReducers } from 'redux'
import { postsReducer } from './reducers/postsReducer';
import { modalReducer } from './reducers/modalReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  shouldShowModal: modalReducer,
});

// формируем объект store, который обеспечивает работу всего redux
export const store = createStore(rootReducer);
