import styled from 'styled-components'

export const Container = styled.div`
  
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "content";
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin: 0 7.6rem 0;
  grid-area: content;
  overflow-y: auto;

  > p {
    text-align: justify;
  }
`
export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.39rem;
  margin-top: 0.54rem;

  > img {
    width: 1rem;
    height: 1rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
`

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > img:nth-child(1) {
    width: 2rem;
    height: 2rem;
    border-radius: 2.18rem;

    border: 1px solid #3E3B47;
  }

  > img:nth-child(3) {
    width: 1rem;
    height: 1rem;
  }
`
