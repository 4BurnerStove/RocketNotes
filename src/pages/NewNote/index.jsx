import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { Container, Form } from './styles'

export function NewNote() {
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
            <NoteItem value='https://www.google.com'></NoteItem>
            <NoteItem placeholder='Novo link' isNew></NoteItem>
          </Section>

          <Section name='Marcadores'>
            <div className='tags'>

              <NoteItem value='React'></NoteItem>
              <NoteItem value='Node.js'></NoteItem>
              <NoteItem placeholder='Novo Marcador' isNew></NoteItem>
            </div>

          </Section>
          <Button name='Salvar'></Button>
        </Form>
      </main>

    </Container>

  )
}