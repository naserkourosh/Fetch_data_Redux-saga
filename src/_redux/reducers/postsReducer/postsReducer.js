import { FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE } from "../../Actiontypes/postsTypes";

const initialState = {
  pending: false,
  posts: [],
  error: null
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {...state,pending: true};
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
