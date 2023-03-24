import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
          {` ${article.author}`}
        </Text>
        <Text>
          <OverlayTrigger
            overlay={
              <Tooltip>
                {"Open in a new tab"}
              </Tooltip>
            }
            placement="right"
          >

            <StyledLink
              to={article.url}
              target="_blank"
              rel="noopener noreferer"
            >
              Go to URL
            </StyledLink>
          </OverlayTrigger>
        </Text>
      </Description>
    </Modal.Body>
  </Modal>
);