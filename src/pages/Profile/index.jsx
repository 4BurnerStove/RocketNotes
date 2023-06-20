import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Avatar } from './styles'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft></FiArrowLeft>
        </a>
      </header>

    <Form>
      <Avatar>
        <img src="https://github.com/4Burnerstove.png"
         alt="Foto do usuário" />
         <label htmlFor="avatar">
          <FiCamera/>
            <input id='avatar' type="file" />
         </label>
      </Avatar>

      <Input
      Placeholder='name'
      type='text'
      icon={FiUser}
      ></Input>

      <Input
      Placeholder='E-mail'
      type='text'
      icon={FiMail}
      ></Input>

      <Input
      Placeholder='Senha atual'
      type='password'
      icon={FiLock}
      ></Input>

      <Input
      Placeholder='Nova senha'
      type='password'
      icon={FiLock}
      ></Input>

      <Button name='Salvar'></Button>

    </Form>

    </Container>
  )
}