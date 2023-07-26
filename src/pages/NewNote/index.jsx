import { useState } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { Container, Form } from './styles'

export function NewNote() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')


  const [tag, setTag] = useState([])
  const [newTag, setNewTag] = useState('')

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
    if (!newTag) {
      return
    }
    setTag(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(delet) {
    setTag(prevState => prevState.filter(tag => tag !== delet))
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
          <Input placeholder='Título' />
          <Textarea placeholder='Observações'></Textarea>

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
                tag.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }


              <NoteItem
                isNew
                placeholder='Novo Marcador'
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              ></NoteItem>
            </div>

          </Section>
          <Button name='Salvar'></Button>
        </Form>
      </main>

    </Container>

  )
}