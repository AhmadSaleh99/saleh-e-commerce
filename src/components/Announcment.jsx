import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const Announcment = () => {
  return <Container>Super Deal! Free Shipping On Orders Above 50$.</Container>;
};

export default Announcment;
