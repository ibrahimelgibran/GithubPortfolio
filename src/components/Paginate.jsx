import React from 'react'
import styled from 'styled-components'

const Paginate = ({ children }) => {
  return <Container>{children}</Container>
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  //border: 1px solid black ;
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  @media screen and (min-width: 800px) {
    width: 90%;
    margin: 0 auto ;
  }
`

export default Paginate
