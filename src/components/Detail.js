import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt="DetailImage"
        />
      </Background>

      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt="title"
        />
      </ImageTitle>

      <Controls>
        <Button primary background={"rgb(249,249,249)"}>
          <img src="/images/play-icon-black.png" alt="button" />
          <span>Play</span>
        </Button>

        <Button second background={"rgba(0,0,0,0.3)"}>
          <img src="/images/play-icon-white.png" alt="button" />
          <span>Trailer</span>
        </Button>

        <Button circle background={"rgba(0,0,0,0.6)"}>
          <span>+</span>
        </Button>

        <Button circle background={"black"}>
          <img src="/images/group-icon.png" alt="button" />
        </Button>
      </Controls>

      <Subtitle>2018 - 7m - Family, Fantasy, Animation</Subtitle>
      <Description>
        Bao is a 2018 American animated short film written and directed by Domee
        Shi and produced by Pixar Animation Studios. It is the first Pixar short
        film to be directed by a female director.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 32vh;
  min-height: 170px;
  width: 25vw;
  margin-top: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Subtitle = styled.span``;
const Description = styled.p`
  width: 850px;
  line-height: 1.4;
  font-size: 20px;
`;
