import { Container } from './styles'
import { Button } from '../../components/Button'


export function Details() {

  return (
    <Container>
      <h1>Hello, world!</h1>
      <span>Andre morryson </span>


      <Button name='Login'></Button>
      <Button name='Cadastrar' ></Button>
      <Button name='Sair' ></Button>
    </Container>
  )
}