import React, { useState } from 'react';
import { StyledButton, Text, Heading } from './styled';
import Modal from 'react-bootstrap/Modal';

export const Popup = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <StyledButton
        onClick={() => setShow(true)}
      >
        More
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
              📈 Ups and downs 📉!
            </Heading>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Heading secodnary>Time flies when you're having fun! 🥳</Heading>
          <Text>I had the most fun working on the website design.
          </Text>
          <Text>My goal was to bring a smile to your face by taking care of the smallest detail. I would like you to feel the consistency between my website and your company</Text>
          <Heading secodnary>No pain, no gain! 🥵</Heading>
          <Text>I haven't written an application in TypeScript because I don't know it well enough - I'm still learning!
          </Text>
          <Text>
            I didn't write the tests and I didn't add the page translation. I'm not giving up - that's my plan for the future!
          </Text>
        </Modal.Body>
      </Modal>
    </>
  );
}