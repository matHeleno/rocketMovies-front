import styled from 'styled-components'

export const Container = styled.div`
  
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "content";

  > Section {

    > span {
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-size: 20px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin: 0 7.6rem 0;
  grid-area: content;
  overflow-y: auto;
`

export const TagContainer = styled.div`
  display: flex;
  justify-content: start;

  border-radius: 0.5rem;
  gap: 1.5rem;

  padding: 1rem;

  background-color: #0D0C0F;
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`