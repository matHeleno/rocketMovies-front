import { Link } from 'react-router-dom'
import { Input } from "../Input";
import { Container, Brand, Profile } from "./styles";

import { useAuth } from '../../hooks/auth';

export function Header() {

  const { signOut } = useAuth()


  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder={'Pesquisar pelo título'} />


      <Profile>
        <div>
          <Link to="/profile">
            <strong>Matheus Heleno</strong>
          </Link>
          <a onClick={signOut}>sair</a>
        </div>

        <img src="https://github.com/matHeleno.png" alt="foto do usuário" />

      </Profile>
    </Container>
  )
}