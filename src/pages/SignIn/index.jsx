import { Link } from "react-router-dom";

import { Background, Container, Form, InputContainer } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>
          RocketMovies
        </h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu login</h2>
        <InputContainer>
          <Input placeholder='E-mail'/>
          <Input placeholder='Senha'/>
        </InputContainer>
        <Button title={'Entrar'}/>
        <Link to={'/signup'}>
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  )
}