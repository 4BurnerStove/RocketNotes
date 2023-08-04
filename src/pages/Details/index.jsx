import { useState, useEffect } from 'react'
import { Container, Links, Content } from './styles'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'


import { Link } from 'react-router-dom'

export function Details() {
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const params = useParams()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()

  }, [])

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover esta nota?')

    if (confirm) {
      await api.delete(`notes/${params.id}`)
      navigate('/')
    }
  }

  return (
    <Container>
      <Header></Header>
      <main>
        {
          data &&
          <Content>
            <ButtonText
              onClick={handleRemove}
              name='Excluir nota'
            ></ButtonText>

            <h1>
              {data.title}
            </h1>
            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li
                        key={String(link.id)}
                      >
                        <a
                          target='_blank'
                          href={link.url}
                        >
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title='Tags'>
                {
                  data.tags.map(tag => (
                    <Tag key={String(tag.id)} name={tag.name}></Tag>
                  ))
                }
              </Section>
            }
            <Link to='/'>
              <Button name='Voltar'></Button>
            </Link>
          </Content>
        }

      </main>
    </Container>

  )
}