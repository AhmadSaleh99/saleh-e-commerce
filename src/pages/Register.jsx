import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1706054400&semt=ais")
      center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin: 20px 10px 0 0;
  ${mobile({
    margin: "10px 5px 0 0",
  })}
`;
const Aggrement = styled.span`
  font-size: 12px;
  margin: 10px 0;
`;
const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 15px 25px;
  border: none;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="lastname" />
          <Input placeholder="username" />
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Input type="password" placeholder="confirmpassword" />
          <Aggrement>
            By creating an account, I concent to the processing of my personal
            data in according with <b>PRIVACY POLICY</b>
          </Aggrement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
