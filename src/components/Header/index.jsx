import { Container, Profile, Logout } from './styles.js'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  
  function handleBack(){
    signOut()
    navigate('/')
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Profile to='/profile'>
        <img src={avatarUrl} alt="Foto do usuario" />
        <div>
          <span>Bem-vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleBack}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}