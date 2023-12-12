import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BreadCrumb = ({ repoName }) => {
  return (
    <Container>
      <Content>
        <Link to='/repos'>Back to Repositories</Link>

        <span className='repo'>{repoName}</span>
      </Content>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 2.5rem;
  color: black;
  margin: 0 1rem;
  padding: 1rem;

  @media screen and (max-width: 400px) {
    margin: 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
    border: 2px solid black;
    padding: 0.125rem 1rem;
    color: black;
    border-radius: 8px;
    background-color: rgb(255, 171, 76);
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
  span {
    font-size: 1rem;
    color: black;
    text-transform: capitalize;
  }
  .repo {
    margin-left: 1rem;
    border: 2px solid black;
    padding: 0.125rem 1rem;
    border-radius: 8px;
    background-color: #caff04;
    @media screen and (max-width: 400px) {
      margin-top: 0.5rem;
      margin-left: 0;
    }
  }
`

export default BreadCrumb
