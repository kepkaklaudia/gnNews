import { configureStore } from '@reduxjs/toolkit';
import newsReducer from "./getData/newsSlice";
import createSagaMiddleware from "redux-saga";
import { newsSaga } from "./getData/newsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(newsSaga);

export default store;