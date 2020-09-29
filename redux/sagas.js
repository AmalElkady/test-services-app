import { call, put, takeEvery, all } from "redux-saga/effects";
import TYPES from "./types";
import { appendErrors } from "react-hook-form";

function* fetchProjectsData(action) {
  //   try {
  //     const data = yield fetch("./api/projects");
  //     const projects = yield data.json();
  //     yield put({ type: TYPES.GET_PROJECTS_SUCCESS, projects });
  //   } catch (error) {
  //     console.log("error ", error);
  //     yield put({ type: TYPES.GET_PROJECTS_ERROR, error });
  //   }

  const { payload } = action;
  try {
    const response = yield fetch(`./api/projects/?page=${payload}`);
    const projects = yield response.json();
    yield put({ type: TYPES.GET_PROJECTS_SUCCESS, payload: projects });
  } catch (error) {
    yield put({ type: TYPES.GET_PROJECTS_ERROR, payload: error.message });
  }
}
export default function* rootSaga() {
  yield takeEvery(TYPES.GET_PROJECTS, fetchProjectsData);
}
