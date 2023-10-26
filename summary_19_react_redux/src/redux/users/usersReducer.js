import { USER_ACTIONS } from "./usersActions"

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.ACTION_ADD_USERS: {

    }
    case USER_ACTIONS.ACTION_REMOVE_USERS : {

    }
    default: return state;
  }
}