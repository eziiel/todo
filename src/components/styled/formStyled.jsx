import styled from "styled-components"
import { HeaderTodo } from "./divStyled"

const InclusionCompoundForm = styled(HeaderTodo).attrs({as:"form"})`
  position: relative ;
`

export {InclusionCompoundForm}