import React, { useState } from 'react';
import { StyledButton } from './styled';
import Modal from 'react-bootstrap/Modal';

export const Alert = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StyledButton onClick={handleShow}>
        More
      </StyledButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello World!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Modal Title</h2>
          <p>Woohoo, you're reading this text in a modal!</p>
          <h2>Modal Title</h2>
          <p>Woohoo, you're reading this text in a modal!</p>
        </Modal.Body>
      </Modal>
    </>
  );
}