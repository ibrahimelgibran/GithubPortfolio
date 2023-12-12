import React from 'react'
import styled from 'styled-components'

const Button = ({ text, handleClick }) => {
  return (
    <Container type='button' onClick={handleClick}>
      {text}
    </Container>
  )
}

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 1rem;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
`
export default Button
