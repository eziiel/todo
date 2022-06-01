import styled from "styled-components"
import { css } from "styled-components"
import moon from "../../images/icon-moon.svg"
import sun from "../../images/icon-sun.svg"

const CheckTheme = styled.span`

  background: transparent url(${moon}) center no-repeat ;
  cursor: pointer;
  padding: 2rem;

  ${props => props.theme == true && css`
   background: transparent url(${sun}) center no-repeat ;
  `}
`


export { 
  CheckTheme

}