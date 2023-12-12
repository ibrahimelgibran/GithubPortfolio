import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../components";
import moment from "moment/moment";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { GrTwitter } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";

const token = `${process.env.REACT_APP_API_TOKEN}`;
const SearchResults = () => {
  const { keyword } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        await fetch(`https://api.github.com/users/${keyword}`, {
          auth: token,
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            setUser(data);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchUser();
    //fetchUserRepos()
  }, [keyword]);

  return (
    <Container>
      {loading ? (
        <Loader text="Loading Github user..." />
      ) : (
        <>
          <div className="profile">
            <img src={user?.avatar_url} alt="Ibrahim El Gibran" />
            <div>
              <h4>{user?.name}</h4>
              <p>{user?.login}</p>
            </div>
            <a
              className="bio"
              href={`${user?.html_url}`}
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </div>
          <div className="details">
            <div className="bio">{user?.bio ? user?.bio : "no bio"}</div>
            <div className="blog">
              <a
                href={user?.blog ? user?.blog : null}
                target="_blank"
                rel="noreferrer"
              >
                <BsLink45Deg />
                {user?.blog ? user?.blog : "no website"}
              </a>
            </div>
            <div className="time">
              <p>created : {moment(user?.created_at).fromNow()}</p>
            </div>
            <div className="email">
              <MdOutlineMail />
              {user?.email ? user?.email : "null"}
            </div>
            <div className="users">
              <HiOutlineUsers />
              <span>followers: {user?.followers}</span>
              <span>following: {user?.following}</span>
            </div>
            <div className="repo_count">
              <BiGitBranch />
              <span>Public Repositories: {user?.public_repos}</span>

              <span>
                <a
                  href={`${user?.html_url}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                >
                  view
                </a>
              </span>
            </div>
            <div className="twitter">
              <GrTwitter />
              <p>
                {user?.twitter_username
                  ? `@ ${user?.twitter_username}`
                  : "null"}
              </p>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  //align-items: center ;
  justify-content: center;
  width: 70%;
  min-height: 80vh;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    height: auto;
    width: 90%;
  }
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    // border: 2px solid black;
    margin: 1rem;
    border-radius: 8px;

    .bio {
      width: 90%;
      text-decoration: none;
      color: black;
      border: 2px solid black;
      margin: 1rem;
      text-align: center;
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
  .details {
    width: 50%;
    border: 2px solid black;
    margin: 2rem 0;
    border-radius: 8px;
    .bio {
      display: flex;
      background-color: orange;
      margin: 1rem auto;
      align-items: center;
      justify-content: center;
      width: 95%;
      padding: 1rem;
      border: 2px solid black;
      border-radius: 6px;
      font-size: 1rem;
    }
    .blog {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 95%;
      margin: 1rem auto;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        font-weight: 500;
        border: 2px solid black;
        width: 100%;
        // text-align: center;
        padding: 0.35rem;
        border-radius: 6px;
        background-color: #caff04;
        cursor: pointer;
        left: -2px;
        top: -2px;
        z-index: 2;
        padding: 0.25rem;
        box-shadow: 2px 2px black;
        transition: 0.1s ease-in-out;
        svg {
          font-size: 1.25rem;
          margin: 0 1rem;
        }
        &:hover {
          transform: translateY(2px);
          box-shadow: 0 0 0;
        }
      }
    }
    .time {
      width: 95%;
      border: 2px solid black;
      text-align: center;
      margin: 1rem auto;
      border-radius: 6px;
      font-size: 1rem;
      padding: 0.25rem;
    }
    .email,
    .users,
    .repo_count,
    .twitter {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 95%;
      border: 2px solid black;
      margin: 1rem auto;
      padding: 0.25rem;
      border-radius: 6px;
      svg {
        font-size: 1.25rem;
        margin: 0 1rem;
      }
    }
    .users {
      span {
        margin-right: 1rem;
      }
    }
    .repo_count {
      span {
        margin-right: auto;
        a {
          text-decoration: none;
          color: black;
          border: 2px solid black;
          border-radius: 4px;
          padding: 0.015rem 1.5rem;
          cursor: pointer;
          transition: 0.1s ease-in-out;
          &:hover {
            background-color: #caff04;
          }
        }
      }
    }
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
export default SearchResults;
