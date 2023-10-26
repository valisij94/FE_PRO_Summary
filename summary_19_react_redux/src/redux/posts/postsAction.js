export const POSTS_ACTIONS = {
  START_REQUEST: 'POSTS/START_REQUEST',
  RESPONSE_RECEIVED: 'POSTS/RESPONSE_RECEIVED',
  REQUEST_ERROR: 'POSTS/REQUEST_ERROR'
}

export const startRequestAction = () => {
  return {
    type: POSTS_ACTIONS.START_REQUEST
  }
}

export const responseReceivedAction = (posts) => {
  return {
    type: POSTS_ACTIONS.RESPONSE_RECEIVED,
    payload: posts
  }
}

export const asyncPostsAction = () => {
  console.log('dispatch async action')
  return (dispatch) => {
    console.log('start async action')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then( resp => resp.json() )
      .then( res => {
        console.log('end async action')
        dispatch(responseReceivedAction(res))
      });
  }
}

export const responseErrorAction = (error) => {
  return {
    type: POSTS_ACTIONS.REQUEST_ERROR,
    payload: error
  }
}