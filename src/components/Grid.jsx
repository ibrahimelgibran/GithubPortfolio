import React from 'react'
import styled from 'styled-components'

const Grid = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}

export const Container = styled.div`
  margin: 1rem;
  padding: 0 20px;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
`
export default Grid
