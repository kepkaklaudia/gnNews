import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Menu = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title  >Choose country</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}