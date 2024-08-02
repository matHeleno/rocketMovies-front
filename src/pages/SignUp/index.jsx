import { useState } from "react";
import { Background, Container, Form, InputContainer } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import {api} from '../../services/api'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link, useNavigate } from "react-router-dom";


export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate()
  
  function handleSignUp() {
    console.log(name, email, password) 
      if(!name || !email || !password) {
        return alert("Preencha todos os campos")
      }
      
    api.post("/users", {name, email, password})
          .then(() => {
            alert("Usuário cadastrado com sucesso")
            navigate("/")
          })
        .catch(error => {
          if(error.response) {
            alert(error.response.data.message)
          }
          else {
            alert("Não foi possível cadastrar esse usuário")
          }
        })

    }
  
  return(
    <Container>
      <Form>
        <h1>
          RocketMovies
        </h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>

        <InputContainer>

          <Input 
            placeholder='Nome' 
            type="text"
            icon={FiUser}
            onChange={e => setName(e.target.value)}
          />
          <Input
           placeholder='E-mail' 
           type="text"
           icon={FiMail}
           onChange={e => setEmail(e.target.value)}
          />
          <Input
           placeholder='Senha' 
           type="password"
           icon={FiLock}
           onChange={e => setPassword(e.target.value)}
          />

        </InputContainer>

        <Button 
          type='button'
          title={'Cadastrar'}
          onClick={handleSignUp}
        />

        <Link to='/'>
          <FiArrowLeft size={'1.25rem'}/>
          Voltar para o login
        </Link>

      </Form>

      <Background />
    </Container>
  )
}