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
  margin: 0 7.6rem 0;
  grid-area: content;
  overflow-y: auto;
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