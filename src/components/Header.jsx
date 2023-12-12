import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DiGithubAlt } from "react-icons/di";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Container>
      <div>
        <NavLink to="/">
          <DiGithubAlt className="logo" />
        </NavLink>
      </div>
      <div className="search">
        <SearchBar />
      </div>
      <ul>
        <li>
          <NavLink
            to={`/repos`}
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
            })}
          >
            Repositories
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export const Container = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  border-bottom: 1px solid white;
  background-color: #272728;
  position: sticky;
  top: 0;
  z-index: 500;
  @media screen and (max-width: 768px) {
    .search {
      width: 60%;
    }
  }
  @media screen and (max-width: 400px) {
    .search {
      display: none;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: 0 1rem;
    .logo {
      font-size: 2.25rem;
      color: white;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    font-size: 1rem;
    font-weight: 400;
    list-style: none;
    @media screen and (max-width: 768px) {
      width: 20%;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
    li {
      a {
        text-decoration: none;
        :hover {
          color: black;
        }
      }
      @media screen and (max-width: 400px) {
        margin-left: auto;
      }
    }
  }
`;
export default Header;
