import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  background-color: #fff7f7;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.background};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
  padding: 30px 0 0 40px;
`;
const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide background={item.background} key={item.id}>
            <ImageContainer>
              <Image src={item.image} alt="Sales" />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description} </Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
