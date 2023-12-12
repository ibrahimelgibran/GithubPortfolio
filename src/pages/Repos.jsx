import React, { useState } from 'react'
//import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Loader, Meta, Paginate } from '../components'
import { Card, Grid } from '../components'
import { useApiFetch } from '../hooks/useApiFetch'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PageSize = 8

const Repos = () => {
  const { repos, loading } = useApiFetch()
  const [page, setPage] = useState(1)
  const pageCount = repos.length / PageSize
  const steps = page * PageSize - PageSize

  return (
    <>
      <Meta
        title='Repositories'
        description='A list of public respositories for kuicpet'
      />
      <Container>
        <div className='title'>
          <h3>Public Repositories</h3>
        </div>
        {loading ? (
          <Loader text='Loading Repositories...' />
        ) : (
          <Grid>
            {repos && repos.length > 0 ? (
              repos
                .slice(steps, steps + PageSize)
                .map((repo, i) => (
                  <Card
                    key={i}
                    repoId={repo.name}
                    name={repo.name}
                    description={repo.description}
                    language={repo.language}
                    created_at={repo.created_at}
                  />
                ))
            ) : (
              <h2>No Repositories Found</h2>
            )}
          </Grid>
        )}
      </Container>
      <Wrapper>
        <Paginate>
          <Button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}>
            <FaChevronLeft />
          </Button>
          <Button
            disabled={page >= pageCount}
            aria-disabled={page >= pageCount}
            onClick={() => setPage((prev) => prev + 1)}>
            <FaChevronRight />
          </Button>
        </Paginate>
      </Wrapper>
    </>
  )
}

export const Container = styled.div`
  display: flex;
  //justify-content: center;
  flex-direction: column;
  min-height: 80vh;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    border: 2px solid black;
    height: 2.5rem;
    margin: 1rem auto;
    border-radius: 10px;
    background-color: orange;
    //position: sticky;
    //top: 0;
    //z-index: 1000;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  margin: 0 2rem;
  @media screen and (max-width: 800px) {
    width: 50% ;
    margin: 0 auto;
  }
  @media screen and (max-width: 400px) {
    width: 90% ;
    margin: 0 auto;
  }
  // border: 2px solid black;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  font-size: 1.25rem;
  font-weight: 200;
  width: 2rem;
  height: 2rem;
  background: white;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  margin: 0 0.1rem;
  right: -2px;
  top: -2px;
  z-index: 2;
  box-shadow: 2px 2px black;
  transition: 0.1s ease-in-out;
  :hover {
    background-color: orange;
    transform: translateY(2px);
    box-shadow: 0 0 0;
  }
  :focus {
    background-color: orange;
    //transform: translateY(4px);
    box-shadow: 0 0 0;
  }
  :disabled {
    background-color: lightgray;
    cursor: not-allowed;
    color: black;
  }
`
export default Repos
