import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 14.75rem;

  background-color: ${({ theme }) => theme.COLORS.INPT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  resize: none;

  border-radius: 0.625rem;
  padding: 1.18rem 1rem;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.LG_GRAY};
  }
`