import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.84rem 2rem;

  border-radius: 0.5rem;

  color: ${({theme}) => theme.COLORS.INPT};
  background-color: ${({theme}) => theme.COLORS.BG_LIGHT};

`