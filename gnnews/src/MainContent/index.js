import { StyledLink, Wrapper, Container, Info, Text, Heading, Image, Title, Description } from './styled';
import noPhoto from "./NoPhoto.png";
import { Details } from './Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNews, selectNews, selectNewsStatus } from '../getData/newsSlice';
import { Loader } from '../Loader';
import { Error } from '../Error';

export const Grid = () => {
  const [show, setShow] = useState();
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const status = useSelector(selectNewsStatus);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchNews(id));
  }, [id])

  return (
    status === "loading" ?
      <Loader /> :
      status === "error" ?
        <Error /> :
        <Wrapper
          grid
        >
          {news.articles && news.articles.map((article) => (
            <>
              <Container>
                <StyledLink
                  onClick={() => setShow(article.title)}
                >
                  <Image
                    src={noPhoto}
                  />
                  <Info
                    grid
                  >
                    <Text>
                      {article.publishedAt.substring(10, 0)}
                    </Text>
                    <Text>
                      {article.source.name}
                    </Text>
                  </Info>
                  <Heading>
                    {article.title}
                  </Heading>
                  <Text>
                    {article.description}
                  </Text>
                </StyledLink>
              </Container>
              <Details show={show} article={article} onHide={() => setShow(false)}/>
            </>
          ))}
        </Wrapper>
  );
}

export const List = () => {
  const [show, setShow] = useState();
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const status = useSelector(selectNewsStatus);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchNews(id));
  }, [id])

  return (
    status === "loading" ?
      <Loader /> :
      status === "error" ?
        <Error /> :
        <Wrapper>
          {news.articles && news.articles.map((article) => (
            <>
              <Container>
                <StyledLink
                  onClick={() => setShow(article.title)}
                >
                  <Info>
                    <Text>
                      {article.publishedAt.substring(10, 0)}
                    </Text>
                    <Text>
                      {article.source.name}
                    </Text>
                  </Info>
                  <Heading>
                    {article.title}
                  </Heading>
                </StyledLink>
              </Container>
              <Details show={show} article={article} onHide={() => setShow(false)}/>
            </>
          ))}
        </Wrapper>
  );
}
