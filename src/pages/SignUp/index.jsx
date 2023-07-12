import { useState } from 'react'

import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Container, Form, AlButtonText, Background } from './styles'
import { Link } from 'react-router-dom'

import { api } from '../../../../API/src/services/api'

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert(`Preencha todos os campos!`)
    }

    api.post('/users', {name, email, password})
  }

  return (
    <Container>
      <Background></Background>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e  gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        ></Input>

        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        ></Input>

        <Input
          placeholder='Senha'
          type='password'
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        ></Input>
        <Button name='Cadastrar' onClick={handleSignUp}></Button>

        <Link to='/'>
          <AlButtonText name='Voltar para o login' />
        </Link>

      </Form>

    </Container>
  )
}