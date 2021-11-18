import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPostsFailure,
  fetchPostsSuccess
} from "../../actions/postsActions/postsActions";
import { FETCH_POST_REQUEST} from "../../Actiontypes/postsTypes";

const getPosts = () =>
  axios.get("https://cat-fact.herokuapp.com/facts/random");

function* fetchPostsSaga() {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchPostsFailure({
        error: e.message
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
