import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 7.25rem;
  width: 100%;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BG_GRAY};

  display: flex;
  justify-content: space-between;
  gap: 4rem;

  padding: 1.5rem 7.6rem;
`

export const Brand = styled.div`
  grid-area: brand;
  
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.56rem;

  > div {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 0.875rem;
      color: ${({theme}) => theme.COLORS.WHITE}
    }

    a {
      font-size: 0.875rem;
      color: ${({theme}) => theme.COLORS.BG_GRAY}
    }
  }

  > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;