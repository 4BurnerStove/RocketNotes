import styled from 'styled-components'


export const Container = styled.header`
grid-area: header;

height: 10.5rem;
width: 100%;

border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
justify-content: space-between;

padding: 0 8rem;

display: flex;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > span {
    color: red;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};

    }
     
    span {
      font-weight: normal;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`

export const Logout = styled.button`
border: none;
background: none;

> svg {
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 3.6rem;
}
`