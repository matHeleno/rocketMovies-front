import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({title, icon: Icon}) {
  return (
  <Container>
    {Icon && <Icon size={20}/>}
    {title}
  </Container>
  )
}