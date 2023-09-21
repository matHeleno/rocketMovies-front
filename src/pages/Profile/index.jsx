import { Link } from "react-router-dom";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form, Avatar } from "./styles";


export function Profile() {
  return(
    <Container>
      <header>
        <Link to={'/'}><ButtonText title={'Voltar'} icon={FiArrowLeft} /></Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/matHeleno.png" 
            alt="foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar" 
              type="file"
            />
          </label>
        </Avatar>
        
        <Input placeholder='Username' icon={FiUser}/>
        <Input placeholder='email' icon={FiMail}/>
        <Input placeholder='Senha atual' icon={FiLock}/>
        <Input placeholder='Nova senha' icon={FiLock}/>

      <Button 
        title={'Salvar'}
      />
      </Form>

    </Container>
  )
}