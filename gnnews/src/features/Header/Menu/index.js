import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from 'react-i18next';
import { StyledButton, StyledOffcanvas, Icon } from './styled';
import { Countries } from './Countries';

export const Menu = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <StyledButton
        variant="primary"
        onClick={() => setShow(true)}
      >
        <Icon>
          <RxHamburgerMenu />
        </Icon>
      </StyledButton>
      <StyledOffcanvas
        show={show}
        onHide={() => setShow(false)}
      >
        <Offcanvas.Header
          closeButton
        >
          <Offcanvas.Title>
            {t("offcanvasTitle")}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <Countries
            onClick={() => setShow(false)}
          />
        </Offcanvas.Body>
      </StyledOffcanvas>
    </>
  );
}