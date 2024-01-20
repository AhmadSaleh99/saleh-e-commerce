import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcment from "../components/Announcment";
import Slider from "../components/Slider";

const HomeContainer = styled.div``;

const Home = () => {
  return (
    <HomeContainer>
      <Announcment />
      <Navbar />
      <Slider />
      Home
    </HomeContainer>
  );
};

export default Home;
