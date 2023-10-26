import { POSTS_ACTIONS } from "./postsAction"

const initialState = {
  isFetching: false,
  posts: [],
  errorText: ''
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_ACTIONS.START_REQUEST: {
      return {
        ...state,
        isFetching: true
      }
    }
    case POSTS_ACTIONS.RESPONSE_RECEIVED: {
      return {
        isFetching: false,
        errorText: '',
        posts: action.payload
      }
    }
    case POSTS_ACTIONS.REQUEST_ERROR: {
      return {
        isFetching: false,
        posts: [],
        errorText: action.payload
      }
    }
    default: return state;
  }
}