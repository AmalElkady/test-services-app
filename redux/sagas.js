import { call, put, takeEvery, all } from "redux-saga/effects";
import TYPES from "./types";

function* fetchProjectsData() {
  console.log("fetchProjectsData ");
  try {
    const data = yield fetch("./api/projects");
    const projects = yield data.json();
    yield put({ type: TYPES.GET_PROJECTS_SUCCESS, projects });
  } catch (error) {
    console.log("error ", error);
    yield put({ type: TYPES.GET_PROJECTS_ERROR, error });
  }
}
export default function* rootSaga() {
  yield takeEvery(TYPES.GET_PROJECTS, fetchProjectsData);
}
