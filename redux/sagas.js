import { call, put, takeEvery, all } from "redux-saga/effects";
import TYPES from "./types";
import { appendErrors } from "react-hook-form";

function* fetchProjectsData(action) {
  const { payload } = action;
  try {
    const response = yield fetch(`./api/projects/?page=${payload}`);
    const projects = yield response.json();
    yield put({ type: TYPES.GET_PROJECTS_SUCCESS, payload: projects });
  } catch (error) {
    yield put({ type: TYPES.GET_PROJECTS_ERROR, payload: error.message });
  }
}

function* SendContactUsRequest(action) {
  const { data } = action;
  try {
    const res = yield fetch("./api/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data
      })
    });
    const re = yield res.json();
    yield put({
      type: TYPES.ADD_CONTACT_REQUEST_SUCCESS,
      payload: data,
      status: res.status,
      message: re.message
    });
  } catch (errors) {
    yield put({
      type: TYPES.ADD_CONTACT_REQUEST_ERROR,
      payload: error.message
    });
  }
}

function* watchGetProjectsAsync() {
  yield takeEvery(TYPES.GET_PROJECTS, fetchProjectsData);
}

function* watchSendContact() {
  yield takeEvery(TYPES.ADD_CONTACT_REQUEST, SendContactUsRequest);
}

export default function* rootSaga() {
  yield all([watchGetProjectsAsync(), watchSendContact()]);
}
