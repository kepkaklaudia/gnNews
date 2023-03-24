import { Modal } from 'react-bootstrap';
import { Text, Description, Title, StyledLink } from "./styled";

export const Details = ({ show, onHide, article }) => (
  <Modal
    size="lg"
    show={show === article.title}
    onHide={onHide}
  >
    <Modal.Header closeButton>
      <Modal.Title>
        <Title>
          {article.title}
        </Title>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Text>
        {article.content}
      </Text>
      <Description>
        <Text>Author:
          {article.author}
        </Text>
        <Text>
          <StyledLink
            to={article.url}
            target="_blank"
            rel="noopener noreferer"
          >
            Open URL
          </StyledLink>
        </Text>
      </Description>
    </Modal.Body>
  </Modal>
);