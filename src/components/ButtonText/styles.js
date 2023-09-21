import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.COLORS.PINK};
  background: none;
  padding: 0;
`