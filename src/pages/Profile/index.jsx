import { useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Avatar } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api.js'

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [Oldpassword, setOldpassword] = useState('')
  const [Newpassword, setNewpassword] = useState('')

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }


  async function handleUpdate() {
    const user = {
      name,
      email,
      password: Newpassword,
      old_password: Oldpassword,
    }

    await updateProfile({ user, avatarFile })
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
          <img src={avatar}
            alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id='avatar' type="file" onChange={handleChangeAvatar} />

          </label>
        </Avatar>

        <Input
          placeholder='nome'
          type='text'
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        ></Input>

        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}

        ></Input>

        <Input
          placeholder='Senha atual'
          type='password'
          icon={FiLock}
          onChange={e => setOldpassword(e.target.value)}

        ></Input>

        <Input
          placeholder='Nova senha'
          type='password'
          icon={FiLock}
          onChange={e => setNewpassword(e.target.value)}

        ></Input>

        <Button onClick={handleUpdate} name='Salvar'></Button>

      </Form>

    </Container>
  )
}