import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import styled from 'styled-components'
//import Error from './pages/Error'

const ErrorFallback = ({ error }) => {
  return (
    <Container>
      <Content>
        <p>Something went wrong</p>
        <pre>{error.message}</pre>
      </Content>
    </Container>
  )
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
`
export const Content = styled.div`
  p {
    font-size: 1.5rem;
    font-weight: 200;
    text-align: center;
    color: black;
    margin: 0.5rem 0;
    //width: 50% ;
    @media screen and (max-width: 400px) {
      font-size: 2rem;
    }
  }
  pre {
    color: red;
    width: 50%;
    text-align: center;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
