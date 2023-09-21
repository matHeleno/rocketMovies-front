import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.INPT};
  color: ${({theme}) => theme.COLORS.BG_GRAY};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};

  border-radius: 1rem;
  padding: 1rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({theme}) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > input {
    height: 1.5rem;
    width: 100%;

    padding: 1rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.BG_GRAY};
    }
  }
`