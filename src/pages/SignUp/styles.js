import { ButtonText } from '../../components/ButtonText'
import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  a {
  margin-top: 12.4rem;
  }

  h1 {
    font-size: 4.8rem;
    color: ${({theme }) => theme.COLORS.ORANGE}
  }

   h2 {
    font-size: 2.4rem;
    margin-block: 4.8rem;
  }
  

   p {
    font-size: 1.4rem;
    color: ${({theme }) => theme.COLORS.GRAY_100}
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`


export const AlButtonText = styled(ButtonText)`
  color: ${({theme }) => theme.COLORS.ORANGE};
`
