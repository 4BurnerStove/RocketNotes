import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'


export function Details() {
  return (
    <Container>
      <Header></Header>

      <main>
        <Content>

          <ButtonText title='Excluir nota'></ButtonText>

          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium repellat veniam doloremque consequatur ea totam odio expedita, ex voluptates cum hic minima odit laborum vel fugiat officiis eius ullam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem rerum illo inventore, dolorem magni minima quia dolorum, voluptates nihil pariatur accusamus eos adipisci deleniti quibusdam, excepturi expedita facilis odit qui.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
            </Links>
          </Section>

          <Section title='Tags'>
            <Tag name='express'></Tag>
            <Tag name='node'></Tag>
          </Section>
          <Button name='Voltar'></Button>
        </Content>
      </main>
    </Container>

  )
}