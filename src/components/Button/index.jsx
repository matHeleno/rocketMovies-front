import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({title, icon: Icon, type, onClick}) {
  return (
  <Container
    type={type}
    onClick={onClick}
  >
    {Icon && <Icon size={20}/>}
    {title}
  </Container>
  )
}