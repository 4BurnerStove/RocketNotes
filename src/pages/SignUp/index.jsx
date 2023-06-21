import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Container, Form, AlButtonText, Background } from './styles'
import { Link } from 'react-router-dom'


export function SignUp() {
  return (
    <Container>
      <Background></Background>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e  gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder='Nome' type='text' icon={FiUser}></Input>
        <Input placeholder='E-mail' type='text' icon={FiMail}></Input>
        <Input placeholder='Senha' type='password' icon={FiLock}></Input>
        <Button name='Cadastrar'></Button>

        <Link to='/'>
          <AlButtonText name='Voltar para o login'/>
        </Link>

      </Form>

    </Container>
  )
}