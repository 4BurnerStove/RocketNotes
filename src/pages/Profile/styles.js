import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;

  header {
    width: 100%;
    height: 14.4rem;

    background: ${({theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    svg {
      color: ${({theme }) => theme.COLORS.GRAY_100};
      font-size: 2rem
    }
  }

`

export const Form = styled.form`
  max-width: 34rem;
  margin: -98px auto 0;

  > div:nth-child(4){
    margin-top: 2.4rem;
  }

`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;

  width: 18.6rem; 
  height: 18.6rem;

  > img {
    border-radius: 50%;
    width: 18.6rem; 
    height: 18.6rem;

  }

  > label {
    width: 4.8rem;
    height: 4.8rem;


    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    position: absolute;
    bottom: .7rem;
    right: .7rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900}
    }
  }

`
