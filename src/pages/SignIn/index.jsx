import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, AlButtonText, Background } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e  gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input placeholder='E-mail' type='text' icon={FiMail}></Input>
        <Input placeholder='E-mail' type='password' icon={FiLock}></Input>
        <Button name='Entrar'></Button>

        <Link to='/register'>
          <AlButtonText name='Criar conta'/>
        </Link>

      </Form>

      <Background></Background>
    </Container>
  )
}