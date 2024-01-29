import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({
    alignItems: "center",
    justifyContent: "center",
    textAlign: "justify",
  })}
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: White;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8", textAlign: "center" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SALEH.</Logo>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque fugit,
          sequi aperiam quis totam sed et itaque molestias libero atque corporis
          laboriosam tenetur blanditiis modi voluptatum, amet doloremque facere
          vitae?
        </Description>
        <SocialContainer>
          <SocialItem color="385999">
            <Facebook />
          </SocialItem>
          <SocialItem color="E4405F">
            <Instagram />
          </SocialItem>
          <SocialItem color="55ACEE">
            <Twitter />
          </SocialItem>
          <SocialItem color="E60023">
            <Pinterest />
          </SocialItem>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Accont</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whish List</ListItem>
          <ListItem>Whish List</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Your Address
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          Your Phone Number
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          Your Email
        </ContactItem>
        <Payment src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
