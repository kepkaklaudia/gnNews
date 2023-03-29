import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import { StyledButton, Text, Heading } from './styled';

export const Popup = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <StyledButton
        onClick={() => setShow(true)}
      >
        {t("menuButton")}
      </StyledButton>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
      >
        <Modal.Header
          closeButton
        >
          <Modal.Title>
            <Heading>
              📈 {t("modalHeader")} 📉!
            </Heading>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Heading secodnary>{t("modalFirstHeading")}</Heading>
          <Text>
            {t("modalFirstSection")}
          </Text>
          <Text>
            {t("modalSecondSection")}
            </Text>
            <Heading secodnary>{t("modalSecondHeading")}</Heading>
            <Text>
            {t("modalThirdSection")}
            </Text>
            <Text>
            {t("modalFourthSection")}
            </Text>
        </Modal.Body>
      </Modal>
    </>
  );
}