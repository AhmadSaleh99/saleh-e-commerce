import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-weight: 500;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2px;
  cursor: pointer;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const LogoTitle = styled.h1``;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
const MenuItem = styled.div`
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input />
          <Search style={{ color: "gray", fontSize: "18px" }} />
        </SearchContainer>
      </Left>
      <Center>
        <LogoTitle>SALEH.</LogoTitle>
      </Center>
      <Right>
        <MenuItem>REGESTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined color="action" />
          </Badge>
        </MenuItem>
      </Right>
    </NavbarContainer>
  );
};

export default Navbar;
