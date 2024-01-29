import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcf5f5;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "60px" })}
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "18px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  background-color: white;
  height: 40px;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 20px;
  flex: 8;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timly updates on your favorate products </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
