import styled from "styled-components"
import { css } from "styled-components"
import { SpanCheckBorder } from "./checkStyled"



const InputText = styled.input.attrs({
  id:"adicionar",
  name:"adicionar",
  placeholder:"adicionar tarefa",
  type:"text"
})`
  font-size: 1.125rem;
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--dark-blue2);
  background: var(--dark-blue2);
  outline: none;
  color: var(--light);
  ::placeholder{
    color: var(--dark-blue-light);
  }
  :hover,:focus{
    box-shadow: 0 0 10px 5px #0005
    ;
  }
  

  ${props => props.theme == true && css`
    background-color: var(--light);
    border: 1px solid var(--light);
    color: var(--dark-blue);
    ::placeholder{
    color: var(--dark-blue3);
  }
  `}    
`
const InputCheckStyled = styled.input.attrs({
  type:"checkbox"
})`
  opacity: 0;
  position: absolute;

`


export {
  InputText,
  InputCheckStyled

}