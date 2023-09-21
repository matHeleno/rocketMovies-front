import styled from 'styled-components'

export const Container = styled.section`


  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  margin-right: 8px;

  > .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LG_GRAY};    
    }
  }

`