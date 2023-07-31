import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { useState, useEffect } from 'react'

import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

import { api } from '../../services/api'

export function Home() {
  // const [ search, setSearch ] = useState("")
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  function handleTagSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName)

    if (tagName === 'all') {
      return setTagsSelected([])
    }

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header></Header>
      <Menu>
        <li><ButtonText
          name="Todos"
          onClick={() => handleTagSelected("all")}
          isActive={tagsSelected.length === 0}
        ></ButtonText></li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                name={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              ></ButtonText>
            </li>
          ))
        }
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
            { id: '2', name: 'NodeJs' }
          ]
        }
        }></Note>
      </Content>

      <NewNote to='/NewNote'>
        <FiPlus></FiPlus>
        Criar nota
      </NewNote>

    </Container>
  )
}