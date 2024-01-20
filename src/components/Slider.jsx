import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
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
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  background-color: crimson;
  align-items: center;
`;
const Slide = styled.div`
  height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
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
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbd2C2hAOlqsbe6gqy6LyGQtp6mlDHE9uun-rhMXxcFg&s"
              alt="Sales"
            />
          </ImageContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NOW ON NEW ARRIVALS
            </Description>

            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbd2C2hAOlqsbe6gqy6LyGQtp6mlDHE9uun-rhMXxcFg&s"
              alt="Sales"
            />
          </ImageContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NOW ON NEW ARRIVALS
            </Description>

            <Button>POPULAR NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbd2C2hAOlqsbe6gqy6LyGQtp6mlDHE9uun-rhMXxcFg&s"
              alt="Sales"
            />
          </ImageContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NOW ON NEW ARRIVALS
            </Description>

            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
