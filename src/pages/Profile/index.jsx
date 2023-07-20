import { useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Avatar } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'


export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [Oldpassword, setOldpassword] = useState('')
  const [Newpassword, setNewpassword] = useState('')

  async function handleUpdate(){
    const user = {
      name,
      email,
      password: Newpassword,
      old_password: Oldpassword,
    }

    await updateProfile({ user })
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft></FiArrowLeft>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/4Burnerstove.png"
            alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id='avatar' type="file" />
          </label>
        </Avatar>

        <Input
          Placeholder='name'
          type='text'
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        ></Input>

        <Input
          Placeholder='E-mail'
          type='text'
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}

        ></Input>

        <Input
          Placeholder='Senha atual'
          type='password'
          icon={FiLock}
          onChange={e => setOldpassword(e.target.value)}

        ></Input>

        <Input
          Placeholder='Nova senha'
          type='password'
          icon={FiLock}
          onChange={e => setNewpassword(e.target.value)}

        ></Input>

        <Button onClick={handleUpdate} name='Salvar'></Button>

      </Form>

    </Container>
  )
}