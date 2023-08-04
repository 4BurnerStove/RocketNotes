import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()


  function handleTagSelected(tagName) {

    if (tagName === 'all') {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleDeatils(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
      console.log(response)
    }

    fetchNotes()

  }, [tagsSelected, search])


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
        <Input
          placeholder='Faça sua pesquisa aqui'
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
      </Search>

      <Content>
        <Section name='Minhas notas'></Section>
        {
          notes.map(note => (
            <Note 
            key={String(note.id)} 
            data={note}
            onClick={() => handleDeatils(note.id)}
            />
          )
          )
        }
      </Content>

      <NewNote to='/NewNote'>
        <FiPlus></FiPlus>
        Criar nota
      </NewNote>

    </Container>
  )
}