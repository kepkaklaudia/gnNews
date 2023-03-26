import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNews, selectNewsStatus } from '../../core/getData/newsSlice';
import { Loader } from '../../common/Loader/styled';
import { Error } from '../../common/Error';
import { GridTiles, ListTiles } from './Tiles';

export const Grid = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectNewsStatus);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchNews(id));
  }, [dispatch, id])

  return (
    status === "loading" ?
      <Loader /> :
      status === "error" ?
        <Error /> :
        <GridTiles />
  );
}

export const List = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectNewsStatus);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchNews(id));
  }, [dispatch, id])

  return (
    status === "loading" ?
      <Loader /> :
      status === "error" ?
        <Error /> :
        <ListTiles />
  );
}
