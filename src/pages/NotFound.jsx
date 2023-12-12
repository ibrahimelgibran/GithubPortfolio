import React from "react";
import styled from "styled-components";
import { DiGithubAlt } from "react-icons/di";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Container>
      <Content>
        <div>
          <DiGithubAlt />
          <h2>oops!</h2>
        </div>
        <h5>We can't seem to find the page you're looking for.</h5>
        <p>Error code: 404</p>
        <button type="button" onClick={() => handleClick()}>
          Home
        </button>
      </Content>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;
export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  padding: 1rem;
  p {
    color: red;
    font-size: 1.1rem;
    margin: 0.25rem;
  }
  h5 {
    color: gray;
    font-size: 1.2rem;
    font-weight: 100;
  }
  button {
    color: black;
    padding: 0.25rem 2.5rem;
    border: 2px solid black;
    border-radius: 8px;
    font-weight: 400;
    font-size: 1.125rem;
    background-color: rgb(255, 171, 76);
    cursor: pointer;
    left: -2px;
    top: -2px;
    z-index: 2;
    box-shadow: 2px 2px black;
    transition: 0.1s ease-in-out;
    &:hover {
      transform: translateY(2px);
      box-shadow: 0 0 0;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 5.5rem;
      color: red;
    }
    h2 {
      font-size: 2.125rem;
      font-weight: 200;
    }
  }
`;
export default NotFound;
