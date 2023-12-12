import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SearchBar = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
      setKeyword('')
    } else {
      navigate('/')
    }
  }
  return (
    <>
      <Container>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            name='q'
            placeholder='Search Users'
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type='submit' disabled={!keyword || keyword.length < 3}>
            Search
          </button>
        </form>
      </Container>
    </>
  )
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    width: 25rem;
    margin: 0 1rem;
    input {
      width: 70%;
      padding: 0 1rem;
      background-color: transparent;
      border: none;
      outline: none;
      color: white;
      height: 2rem;
      border: 2px solid white;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    button {
      width: 30%;
      height: 2rem;
      margin: 0;
      border: 2px solid white;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      background-color: orange;
      font-weight: bold;
      cursor: pointer;
    }
  }
`

export default SearchBar
