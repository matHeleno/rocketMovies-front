import { Container } from './styles'

// eslint-disable-next-line react/prop-types
export function Section({title, children, buttonComponent: ButtonComponent}) {
  return(
    <Container>
      <div className='title-container'>
        <p>{title}</p>
        {ButtonComponent && <ButtonComponent />}
      </div>
      {children}
    </Container>
  )
}