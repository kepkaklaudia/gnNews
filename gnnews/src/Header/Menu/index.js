import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { StyledButton, StyledOffcanvas, Icon } from './styled';
import { RxHamburgerMenu } from "react-icons/rx";

export const Menu = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <StyledButton variant="primary" onClick={() => setShow(true)}>
        <Icon>
        <RxHamburgerMenu />
        </Icon>
      </StyledButton>
      <StyledOffcanvas as={Offcanvas} show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title  >Choose country</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        </Offcanvas.Body>
      </StyledOffcanvas>
    </>
  );
}