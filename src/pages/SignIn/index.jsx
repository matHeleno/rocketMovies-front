import { useState } from "react";
import { Link } from "react-router-dom";

import { Background, Container, Form, InputContainer } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth";


export function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password})
  }

  return(

    <Container>
      <Form>
        <h1>
          RocketMovies
        </h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu login</h2>
        <InputContainer>
          <Input 
            placeholder='E-mail'
            type="text"
            onChange={e => setEmail(e.target.value)}
          />

          <Input 
            placeholder='Senha'
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </InputContainer>

        <Button 
          title={'Entrar'}
          onClick={handleSignIn}
        />
        <Link to={'/signup'}>
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  )
}