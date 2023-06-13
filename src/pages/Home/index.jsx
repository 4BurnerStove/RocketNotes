import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header></Header>
      <Menu>
        <li><ButtonText name='Todos' isActive></ButtonText></li>
        <li><ButtonText name='React'></ButtonText></li>
        <li><ButtonText name='Node'></ButtonText></li>
      </Menu>
      <Search>
        <Input placeholder='Faça sua pesquisa aqui'></Input>

      </Search>

      <Content>
        <Section name='Minhas notas'></Section>
        <Note data={{
          title: 'React',
          tags: [
            { id: '1', name: 'React' },
            { id: '2', name: 'NodeJs'}
          ]
        }
        }></Note>
      </Content>
      <NewNote>
        <FiPlus></FiPlus>
        Criar nota
      </NewNote>
    </Container>
  )
}