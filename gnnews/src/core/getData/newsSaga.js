import { takeLatest, put, call, select } from "redux-saga/effects";
import { fetchNews, fetchNewsSuccess, fetchError, selectCountryName } from "./newsSlice";
import { getNews } from "./getNews";

function* fetchNewsHandler() {
  try {
    const name = yield select(selectCountryName);
    const news = yield call(getNews, {countryName: name});
    yield put(fetchNewsSuccess(news));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* newsSaga() {
  yield takeLatest(fetchNews.type, fetchNewsHandler);
}