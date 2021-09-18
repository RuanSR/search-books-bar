import styled from 'styled-components';

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const SearchBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 1rem;

  /* div{
    width: 100%;
    display: flex;
    align-items: center;
  } */

  input{
    width: 70%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #FFF;

    font-weight: 400;
    font-size: 1rem;

  }

  button{
    width: auto;
    height: 2.5rem;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    color: var(--text-color-default);
    background-color: var(--btn-success-background);

    &:hover{
      filter: brightness(0.9);
    }
  }

`

export const Button = styled.button`
    width: auto;
    height: 2.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    color: var(--text-color-default);
    background-color: var(--btn-info-background);

    &:hover{
      filter: brightness(0.9);
    }

`