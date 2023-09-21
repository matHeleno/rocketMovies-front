import styled from "styled-components";
import backgroundIMG from '../../assets/back.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 8.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 39.8125rem;

  > h1 {
    color: ${({theme}) => theme.COLORS.BG_LIGHT};
    font-size: 3rem;
  }

  > span {
    color: ${({theme}) => theme.COLORS.BG_GRAY};
    margin-bottom: 3rem;
  }

  > h2 {
    margin-bottom: 3rem;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
  }

  > Button {
    margin: 1rem 0;
  }
`

export const InputContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundIMG}) no-repeat center center;
  background-size: cover;
  filter: brightness(50%);
`