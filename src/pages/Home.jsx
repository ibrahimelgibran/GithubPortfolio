import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GrTwitter, GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { useApiFetch } from "../hooks/useApiFetch";
import { useProfileFetch } from "../hooks/useProfileFetch";
// images
import yolo from "../assets/yolo-kuicpet.png";
import galaxy from "../assets/galaxy.png";
import pullshark from "../assets/pull-shark-kuicpet.png";
import quickdraw from "../assets/quickdraw-default.png";
import pair from "../assets/pair-extraordinaire-default.png";

import { Card, Grid, Loader } from "../components";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const { repos, loading } = useApiFetch();
  const { user } = useProfileFetch();

  const avatar = user?.avatar_url;
  const userProfileName = user?.name;
  const userName = user?.login;
  const viewProfile = user?.html_url;

  return (
    <Container>
      {loading ? (
        <Loader text="Loading..." />
      ) : (
        <>
          <div className="profile">
            <img
              src={loading ? <Skeleton /> : avatar}
              alt="Ibrahim El Gibran"
            />
            <div>
              <h4>{userProfileName}</h4>
              <p>{userName}</p>
            </div>
            <a
              className="bio"
              href={`${viewProfile}`}
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>

            <div className="socials">
              <a
                href="https://github.com/ibrahimelgibran"
                target="_blank"
                rel="noreferrer"
              >
                <span className="span">
                  <AiFillGithub />
                </span>
              </a>
              <a
                href="https://twitter.com/ibrahimelgibran"
                target="_blank"
                rel="noreferrer"
              >
                <span className="span">
                  <GrTwitter />
                </span>
              </a>
              <a
                href="https://facebook.com/ibrahimelgibran"
                target="_blank"
                rel="noreferrer"
              >
                <span className="span">
                  <GrFacebookOption />
                </span>
              </a>
              <a
                href="https://www.instagram.com/elgibran17/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="span">
                  <FaInstagram />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/ibrahimelgibran/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="span">
                  <GrLinkedinOption />
                </span>
              </a>
            </div>
            <div className="achieve">
              <h4>Achievements</h4>
            </div>
            <div className="highlights">
              <span className="span" style={{ color: "purple" }}>
                <FiStar />
                PRO
              </span>

              <a
                href="https://github.com/ibrahimelgibran?achievement=pair-extraordinaire&tab=achievements"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <img src={pair} alt="" />
                </span>
              </a>
              <a
                href="https://github.com/users/ibrahimelgibran/achievements/galaxy-brain"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <img src={galaxy} alt="" />
                </span>
              </a>
              <a
                href="https://github.com/users/ibrahimelgibran/achievements/yolo"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <img src={yolo} alt="" />
                </span>
              </a>
              <a
                href="https://github.com/users/ibrahimelgibran/achievements/pull-shark"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <img src={pullshark} alt="" />
                </span>
              </a>
              <a
                href="https://github.com/users/ibrahimelgibran/achievements/quickdraw"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <img src={quickdraw} alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="repos">
            <Grid>
              {repos &&
                repos.length > 0 &&
                repos
                  .slice(1, 5)
                  .map((item, i) => (
                    <Card
                      key={i}
                      repoId={item.name}
                      name={item.name}
                      description={item.description}
                      language={item.language}
                      created_at={item.created_at}
                    />
                  ))}
            </Grid>
            <View>
              <Link to="/repos">view more</Link>
            </View>
          </div>
        </>
      )}
    </Container>
  );
};

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 80vh;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    height: auto;
  }
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    // border: 2px solid black;
    margin: 1rem;
    border-radius: 8px;
    .bio {
      display: flex;
      background-color: ;
      margin: 1rem 0;
      align-items: center;
      justify-content: center;
    }
    .bio {
      width: 90%;
      text-decoration: none;
      color: black;
      border: 2px solid black;
      border-radius: 6px;
      background-color: rgb(255, 171, 76);
      left: -2px;
      top: -2px;
      z-index: 2;
      padding: 0.25rem;
      box-shadow: 2px 2px black;
      transition: 0.1s ease-in-out;
      &:hover {
        transform: translateY(2px);
        box-shadow: 0 0 0;
      }
    }
    .achieve {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: orange;
    }
    img {
      width: 90%;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid black;
      margin: 1rem;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 2px solid black;
      width: 90%;
      margin: 0 auto;
      padding: 0.25rem;
      text-align: center;
      border-radius: 6px;
      background-color: #cdebf3;
      h4 {
        font-weight: 600;
      }
    }
    .socials,
    .highlights {
      background-color: white;
      margin: 0.5rem auto;
      border: none;
      a {
        color: black;
      }
      .span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 2px solid black;
        padding: 0.125rem 0.5rem;
        border-radius: 8px;
        font-weight: 100;
        font-size: 1.25rem;
        transition: all 0.1s ease-in-out;
        :hover {
          background-color: orange;
        }
      }
    }
    @media screen and (max-width: 768px) {
      width: 95%;
      height: auto;
    }
    @media screen and (max-width: 400px) {
      width: 90%;
    }
  }
  .repos {
    //display: grid;
    //grid-template-columns: repeat(2, 1fr);
    width: 70%;
    //border: 2px solid black;
    margin: 1rem;
    border-radius: 8px;
    @media screen and (max-width: 768px) {
      width: 100%;
      //grid-template-columns: repeat(1, 1fr);
      //height: 100% ;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

export const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 6px;
  font-size: 1.2rem;
  a {
    text-decoration: none;
    color: black;
    width: 100%;
    text-align: center;
    padding: 0.25rem;
    box-shadow: 2px 2px black;
    transition: 0.1s ease-in-out;
    left: -2px;
    top: -2px;
    z-index: 2;
    :hover {
      background-color: orange;
    }
  }
`;
export default Home;
