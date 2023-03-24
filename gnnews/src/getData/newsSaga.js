import { takeLatest, put, call, select } from "redux-saga/effects";
import { fetchNews, fetchNewsSuccess, fetchError, selectCountryID } from "./newsSlice";
import { getNews } from "./getNews";

function* fetchNewsHandler() {
  try {
    const id = yield select(selectCountryID);
    const news = yield call(getNews, {countryID: id});
    yield put(fetchNewsSuccess(news));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* newsSaga() {
  yield takeLatest(fetchNews.type, fetchNewsHandler);
}