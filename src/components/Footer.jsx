import React from "react";
import styled from "styled-components";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Container>
      <small>
        made with <span className="heart">❤</span> by me{" "}
        <a href="https://ibrahimelgibran.com" target="_blank" rel="noreferrer">
          iegcode
        </a>{" "}
        &copy; {date}
      </small>
    </Container>
  );
};

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
  small {
    .heart {
      color: red;
    }
    a {
      text-decoration: none;
      color: black;
      border: 2px solid black;
      padding: 0.125rem 0.5rem;
      border-radius: 8px;
      background-color: white;
      cursor: pointer;
      left: -2px;
      top: -2px;
      z-index: 20;
      //box-shadow: 2px 2px black;
      transition: 0.1s ease-in-out;
      &:hover {
        background-color: rgb(255, 171, 76);
      }
    }
  }
`;
export default Footer;
