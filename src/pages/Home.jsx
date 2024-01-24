import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcment from "../components/Announcment";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const HomeContainer = styled.div``;

const Home = () => {
  return (
    <HomeContainer>
      <Announcment />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
