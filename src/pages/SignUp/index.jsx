import { useState } from 'react'

import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Container, Form, AlButtonText, Background } from './styles'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  function handleSignUp() {
    if(!name || !email || !password) {
      return alert(`Preencha todos os campos!`)
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert('Usuário cadastrado com sucesso!')
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Não foi possivel cadastrar usuário')
      }
    })


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
          <AlButtonText type='button' name='Voltar para o login' />
        </Link>

      </Form>

    </Container>
  )
}