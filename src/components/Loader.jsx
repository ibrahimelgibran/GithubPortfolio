import React from 'react'
import styled from 'styled-components'

const Loader = ({text}) => (
  <Container>
    <Spinner />
    <h3>{text}</h3>
  </Container>
)

export const Container = styled.div`
  min-height: 100vh ;
  align-items: center ;
  justify-content: center ;
  h3 {
    font-weight: 100 ;
    text-align: center ;
  }
`
export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid black;
  border-top: 5px solid red;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export default Loader
