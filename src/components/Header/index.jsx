import { Link } from 'react-router-dom'
import { Input } from "../Input";
import { Container, Brand, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder={'Pesquisar pelo título'} />

      <Link to="/profile">
      
      <Profile>
        <div>
          <strong>Matheus Heleno</strong>
          <a href="#">sair</a>
        </div>

        <img src="https://github.com/matHeleno.png" alt="foto do usuário" />

      </Profile>
      </Link>
    </Container>
  )
}