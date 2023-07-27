import { useState } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Form } from './styles'

export function NewNote() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    if (!newLink) {
      return
    }
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(delet) {
    setLinks(prevState => prevState.filter(link => link !== delet))
  }

  function handleAddTag() {
    if (!newTags) {
      return
    }


    setTags(prevState => [...prevState, newTags])
    setNewTags('')
  }

  function handleRemoveTags(delet) {
    setTags(prevState => prevState.filter(tags => tags !== delet))
  }

  async function handleNewNote() {
    if(!title){
      return alert('Digite o título da nota')
    }

    if (newTags) {
      return alert("Você esqueceu de adicionar um marcador, clique ou remova o conteúdo")
    }
    if (newLink) {
      return alert("Você esqueceu de adicionar um link, adicione ou remova o conteúdo")
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })

    alert("Nota criada com sucesso!")
    navigate('/')
  }

  return (
    <Container>
      <Header></Header>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input
            placeholder='Título'
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder='Observações'
            onChange={e => setDescription(e.target.value)}
          ></Textarea>

          <Section name='Links úteis'>
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => { handleRemoveLink(link) }}
                ></NoteItem>
              ))
            }

            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            ></NoteItem>

          </Section>

          <Section name='Marcadores'>
            <div className='tags'>
              {
                tags.map((tags, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tags}
                    onClick={() => handleRemoveTags(tags)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder='Novo Marcador'
                onChange={e => setNewTags(e.target.value)}
                value={newTags}
                onClick={handleAddTag}
              ></NoteItem>
            </div>

          </Section>
          <Button name='Salvar' onClick={handleNewNote}></Button>
        </Form>
      </main>

    </Container>

  )
}