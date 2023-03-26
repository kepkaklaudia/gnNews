import { configureStore } from '@reduxjs/toolkit';
import { newsSaga } from "./getData/newsSaga";
import createSagaMiddleware from "redux-saga";
import newsReducer from "./getData/newsSlice";
import viewReducer from "../features/Header/Icons/viewSlice"
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    news: newsReducer,
    view: viewReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(newsSaga);

export default store;