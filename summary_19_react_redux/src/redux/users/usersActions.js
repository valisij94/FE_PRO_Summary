export const USER_ACTIONS = {
  ACTION_ADD_USERS: 'USERS/ADD_USER',
  ACTION_REMOVE_USERS: 'USERS/REMOVE_USER'
}

// Action creator
export const addUsersAction = (id, name, login, email, password) => {
  return {
    type: USER_ACTIONS.ACTION_ADD_USERS,
    payload: {
        id,
        name,
        login,
        email,
        password
    }
  }
}

export const removeUsersAction = (id) => {
  return {
    type: USER_ACTIONS.ACTION_REMOVE_USERS,
    payload: id
  }
}