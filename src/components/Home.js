import React, { useEffect } from "react";

import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewer from "./Viewer";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movies/moviesSlice";
import { selectUserName } from "../features/user/userSlice";
import Trending from "./Trending";
import Recommendeds from "./Recommends";
import Originals from "./Originals";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            console.error("Inavalid type");
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  console.log(recommends, trending, newDisneys, originals);
  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Movies />
      <Trending />
      <Recommendeds />
      <Originals />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px) 300px;
  position: relative;
  overflow-x: hidden;
  margin-top: 70px;

  &::before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
