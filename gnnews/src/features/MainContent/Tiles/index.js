import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectNews } from "../../../core/getData/newsSlice";
import { Wrapper, Container, Info, Heading, Image } from "./styled";
import { Text } from "../styled";
import noPhoto from "./NoPhoto.png";
import { Popup } from "../Popup";
import { StyledLink } from "../../../common/StyledLink/styled"

export const GridTiles = () => {
  const [show, setShow] = useState();
  const news = useSelector(selectNews);

  return (
    <Wrapper
      grid
    >
      {news.articles && news.articles.map((article) => (
        <React.Fragment
          key={article.title}
        >
          <Container>
            <StyledLink
              main="true"
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
          <Popup show={show}
            article={article}
            onHide={() => setShow(false)}
          />
        </React.Fragment>
      ))}
    </Wrapper>
  )
};

export const ListTiles = () => {
  const [show, setShow] = useState();
  const news = useSelector(selectNews);

  return (
    <Wrapper>
      {news.articles && news.articles.map((article) => (
        <React.Fragment
          key={article.title}
        >
          <Container>
            <StyledLink
              main="true"
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
          <Popup show={show}
            article={article}
            onHide={() => setShow(false)}
          />
        </React.Fragment>
      ))}
    </Wrapper>
  )
};