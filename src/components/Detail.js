import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail({ props }) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
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

      <Subtitle>{detailData.subTitle}</Subtitle>
      <Description>{detailData.description}</Description>
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
