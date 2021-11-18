import { FETCH_POST_REQUEST,FETCH_POST_SUCCESS,FETCH_POST_FAILURE } from "../../Actiontypes/postsTypes";

export const fetchPostsRequest = () => ({
  type: FETCH_POST_REQUEST
});

export const fetchPostsSuccess = (payload) => ({
  type: FETCH_POST_SUCCESS,
  payload
});

export const fetchPostsFailure = (payload) => ({
  type: FETCH_POST_FAILURE,
  payload
});
