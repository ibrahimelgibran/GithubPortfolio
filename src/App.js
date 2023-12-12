import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components'
import Home from './pages/Home'
import Repos from './pages/Repos'
import SingleRepo from './pages/SingleRepo'
import NotFound from './pages/NotFound'
import styled from 'styled-components'
import SearchResults from './pages/SearchResults'

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search/:keyword' element={<SearchResults />} />
        <Route exact path='/repos' element={<Repos />} />
        <Route exact path='/repos/:repoId' element={<SingleRepo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export const Container = styled.div`
background-color: rgba(255, 255, 255, 0.16);
`

export default App
