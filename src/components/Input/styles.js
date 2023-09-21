import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.625rem;

  background-color: ${({theme}) => theme.COLORS.INPT};
  
  > input {
    width: 100%;
    padding: 1.18rem 1.5rem;

    color: ${({theme}) => theme.COLORS.LG_GRAY};
    font-size: 0.875rem;

    background: none;
  }

  > svg {
    margin-left: 1.6rem;
  }
`