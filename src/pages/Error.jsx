import React, { useState } from 'react'
import styled from 'styled-components'

const Error = () => {
  const [error, setError] = useState(false)
  if (error) {
    throw new Error('Something went wrong...')
  }
  return (
    <div>
      <button onClick={() => setError(true)}>Test ErrorBoundary</button>
    </div>
  )
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;

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
`

export default Error
