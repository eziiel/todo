import styled from "styled-components"
import { css } from "styled-components"
import moon from "../../images/icon-moon.svg"
import sun from "../../images/icon-sun.svg"
import check from "../../images/icon-check.svg"

console.log(check)
const CheckTheme = styled.span`

  background: transparent url(${moon}) center no-repeat ;
  cursor: pointer;
  padding: 2rem;

  ${props => props.theme == true && css`
   background: transparent url(${sun}) center no-repeat ;
  `}
`

const SpanCheck = styled.span`
  width:22px;
  height:20px;
  background: var(--dark-blue2);
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  margin: .5rem;
  
  ${props => props.status && css`
    background: var(--light) url(${check}) center no-repeat;
  `}
`
const SpanCheckBorder = styled.span`

`



export { 
  CheckTheme,
  SpanCheck,
  SpanCheckBorder,
}