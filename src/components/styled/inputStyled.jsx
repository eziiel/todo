import styled from "styled-components"
import { css } from "styled-components"



const InputText = styled.input.attrs({
  id:"adicionar",
  name:"adicionar",
  placeholder:"adicionar tarefa",
  type:"text"
})`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid var(--dark-blue2);
  background: var(--dark-blue2);
  outline: none;
  color: var(--light);
    
  ${props => props.theme == true && css`
   background-color: var(--light);
   color: var(--dark-blue);
  `}    
  
`

export {
  InputText

}