import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 250px;

  margin: .75rem;

  position: relative;
  word-wrap: break-word;

  background-color: #fff;
  background-clip: border-box;

  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
`

export const Thumbnail = styled.img`
  max-width: 250px;
  max-height: 250px;

  padding: .25rem;
  margin: .25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: .25rem;
  max-width: 100%;
  height: auto;
`

export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;

  h1{
    margin-bottom: .75rem;
    font-size: 1rem;
  }
  
  p{
    margin-top: 0;
    font-size: .75rem;
    margin-bottom: 1rem;
  }

  button{
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
  }
`