import { Container, Profile, Logout } from './styles.js'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'


export function Header() {
  const { signOut } = useAuth()
  

  return (
    <Container>
      <Profile to='/profile'>
        <img src="https://github.com/4Burnerstove.png" alt="Foto do usuario" />
        <div>
          <span>Bem-vindo,</span>
          <strong>André Morryson </strong>
        </div>
      </Profile>

      <Logout onClick={ signOut }>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}