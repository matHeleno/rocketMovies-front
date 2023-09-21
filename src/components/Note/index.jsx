/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Tag } from '../Tag';


export function Note({ data, children,...rest }) {
  return(
    <Container to={'/preview'} {...rest}>
      <h1>{data.title}</h1>

      {children}
      
      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }


    </Container>
  )
}