import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100vw;
  display: flex;

  justify-content: center;
`;
const Text = styled.span`
  color: ${props => props.color};
`;
const Message = ({ color, text }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default Message;
