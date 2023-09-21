import { Link } from "react-router-dom";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Background, Container, Form, InputContainer } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>
          RocketMovies
        </h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>
        <InputContainer>
          <Input placeholder='Nome' icon={FiUser}/>
          <Input placeholder='E-mail' icon={FiMail}/>
          <Input placeholder='Senha' icon={FiLock}/>
        </InputContainer>
        <Button title={'Cadastrar'}/>
        <Link to={'/'}>
          <FiArrowLeft size={'1.25rem'}/>
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  )
}