import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { BiGitBranch } from 'react-icons/bi'

const Card = ({ name, description, created_at }) => {
  return (
    <Container>
      <span>
        <BiGitBranch />
        <h5>{name}</h5>
      </span>
      <p className='desc'>
        {description
          ? description.length < 150
            ? description
            : `${description.substring(0, 120)}...`
          : 'No description'}
      </p>

      <small>Created : {moment(created_at).fromNow()}</small>
    </Container>
  )
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
  border: 2px solid #47474e;
  height: 12rem;
  padding: 0.5rem;
  color: black;
  z-index: 100;
  //background-color: #3f3f46 ;

  span {
    display: flex;
    align-items: center;
    svg {
      color: black;
      font-size: 1.25rem;
    }
  }
  h5 {
    text-transform: capitalize;
    margin-left: 0.5rem;
  }
  p {
    margin: 0.125rem 0;
    font-weight: 200;
    color: #292626;
    font-size: 0.9rem;
  }
  .lang {
    text-align: center;
    color: purple;
    border: 1px solid purple;
    width: 50%;
    padding: 0.015rem;
    border-radius: 10px;
    margin: 0.5rem 0;
  }
  .desc {
    margin-top: 1rem;
  }
  small {
    position: absolute;
    bottom: 0.5rem;
    right: 10px;
    border: 2px solid black;
    padding: 0.125rem 1rem;
    background-color: #caff04;
    font-weight: bold;
    border-radius: 6px;
  }
`
export default Card
