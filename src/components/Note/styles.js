import { Link } from 'react-router-dom';

import  styled  from 'styled-components';

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.NOTE};

  border: none;
  border-radius: 1rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }

  > p {
  margin-top: 0.93rem;
  text-align: justify;
  color: ${({theme}) => theme.COLORS.GRAY};
  overflow: hidden; /* Esconde o conteúdo extra */
  max-height: 5.5rem; /* Altura máxima equivalente a aproximadamente 3 linhas de texto */
  /*line-height: 1.5rem;  Espaçamento entre linhas */
  position: relative;
}

> p::after {
  content: '. . .';
    position: absolute;
    bottom: 0.25rem;
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #272024 50%);
    padding-left: 1.5rem;
}
`;