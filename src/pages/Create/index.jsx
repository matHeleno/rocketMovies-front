import { Link } from "react-router-dom";

import { Container, TagContainer, ButtonContainer, Content } from "./styles";

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function Create() {
  return (
    <Container>

      <Header />
      <Content>
        <Link to={'/'}><ButtonText title={'Voltar'} icon={FiArrowLeft} /></Link>        

        <Section title={'Novo filme'} >

          <Input placeholder={'Título'} />
          <Input placeholder={'Sua nota (de 0 a 5)'} />

          <TextArea placeholder='Observações' />

          <span>
            Marcadores
          </span>

          <TagContainer>
            <NoteItem value='Comédia Romântica' />
            <NoteItem isnew='true' placeholder='Novo marcador' />
          </TagContainer>

          <ButtonContainer>
            <Button title={'Excluir filme'} />
            <Button title={'Salvar alterações'} />
          </ButtonContainer>
        </Section>
        
      </Content>
    </Container>
  )
}