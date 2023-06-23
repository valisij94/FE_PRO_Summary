// Actions

import { posts_data } from "../../data/posts_data";

const postsActions = {
    ADD_POST: 'ADD_POST',
    DELETE_POST: 'DELETE_POST',
    CHANGE_LIKE: 'CHANGE_LIKE',

    ADD_COMMENT: 'ADD_COMMENT',
    DELETE_COMMENT: 'DELETE_COMMENT'
};

// Action creator
export const addPost = (post) => ( { type: postsActions.ADD_POST, post } );
export const deletePost = (id) => ( { type: postsActions.DELETE_POST, id } );
export const changeLike = (id) => ( { type: postsActions.CHANGE_LIKE, id } );
export const addComment = (postId, commentText) => ( { type: postsActions.ADD_COMMENT, postId, commentText } );
export const deleteComment = (postId, commentId) => ( { type: postsActions.DELETE_COMMENT, postId, commentId})

// 1. определить тип экшна (ADD_POST) и экспортировать его
// 2. Написать функцию которая создает экшн - addPost
// 3. Доработать редьюсер: обрабатывать наш экшн

export const postsReducer = ( state = posts_data, action) => {
    switch (action.type) {
        case postsActions.ADD_POST : {
            return [...state, action.post]
        }
        case postsActions.DELETE_POST : {
            return state.filter( post => post.id !== action.id );
        }
        case postsActions.CHANGE_LIKE : {
            const target_post = state.find(el => el.id === action.id);
            target_post.like = !target_post.like;
            return [...state];
        }
        case postsActions.ADD_COMMENT : {
            const target_post = state.find(el => el.id === action.postId);
            target_post.comments.push(action.commentText)
            return [...state];
        }
        case postsActions.DELETE_COMMENT : {
            const target_post = state.find(el => el.id === action.postId);
            target_post.comments = target_post.comments.filter(el => el.id !== action.commentId);
            return [...state];
        }
        default: return state;
    }
}