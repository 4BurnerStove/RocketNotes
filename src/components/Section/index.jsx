import { Container } from "./styles"

export function Section({name, children}){
  return (
    <Container>
      <h2>{name}</h2>
      {children}
    </Container>
  )
}