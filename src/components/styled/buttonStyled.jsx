import styled from "styled-components"
import { css } from "styled-components";


//to rem
function pixelsToRem (...values) {
  return values
      .reduce((a,i) => (a += i/16 + `rem `),"")
      .trim();
}



const Button = styled.button`

  cursor: pointer;
  width: 15%;
  height: 100%;
  right: 0;
  border-radius: 10px;
  border: 1px solid var(--dark-blue2);
  background: var(--dark-blue2);
  outline: none;
  letter-spacing: .5px;
  color: var(--light);
  font-size: ${pixelsToRem(16)};
  font-weight: bold;

  :disabled{
    opacity: .5;
    cursor: auto;
  }

${props => props.theme == true && css`
    background-color: var(--light);
    border: 1px solid var(--light);
    color: var(--dark-blue);
    ::placeholder{
  }
  `}  
`

const ButtonDelete = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 1rem;
  color: var(--dark-blue3);
  opacity: 0;
`
  
const ButtonSend = styled(Button)`
  position: absolute; 
  `



const ButtonClearAll = styled(Button)`
  font: var(--text2);
  background-color: transparent;
  border: none;
  width: 150px;
  ${props => props.theme == true && css`
    color: var(--dark-blue);
  `}
`




export {
  ButtonSend,
  ButtonDelete,
  ButtonClearAll,

}