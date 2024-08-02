import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectTrending } from "../features/movies/moviesSlice";
import { useSelector } from "react-redux";

function Trending() {
  const movies = useSelector(selectTrending);

  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, index) => (
            <Wrap key={index}>
              <Link to="/home">
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Trending;

const Container = styled.div`
  margin-top: 30px;

  h4 {
    display: inline-block;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.92) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    overflow-x: hidden;
  }
`;
