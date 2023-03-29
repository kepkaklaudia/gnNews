import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Text } from "../styled";
import { Description, Title } from "./styled";
import { StyledLink } from "../../../common/StyledLink/styled";

export const Popup = ({ show, onHide, article }) => {
  const { t } = useTranslation();

  return (
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
          <Text>
            {t("author")}
            {` ${article.author}`}
          </Text>
          <Text>
            <OverlayTrigger
              overlay={
                <Tooltip>
                  {t("tooltip")}
                </Tooltip>
              }
              placement="right"
            >

              <StyledLink
                to={article.url}
                target="_blank"
                rel="noopener noreferer"
              >
                {t("goToURL")}
              </StyledLink>
            </OverlayTrigger>
          </Text>
        </Description>
      </Modal.Body>
    </Modal>
  )
};