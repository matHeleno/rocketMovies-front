import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({theme}) => theme.COLORS.NOTE};

    display: flex;
    align-items: center;

    padding: 0 7.75rem;
  }
`

export const Form = styled.form`

  display: flex;
  flex-direction: column;

  gap: 1rem;

  max-width: 21.25rem;
  margin: 0 auto;

  > div:nth-child(4) {
    margin-top: 1.4rem;
  }
`

export const Avatar = styled.div`
  
  
  
  position: relative;
  margin: -6rem auto;

  width: 11rem;
  height: 20rem;

  > img {
    width: 11.6rem;
    height: 11.6rem;
    border-radius: 5.8rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7.5rem;
    right: -1rem;

    cursor: pointer;
    
    input { 
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`