
import React from 'react'
import { ContextTheme } from '../../context/contextTheme'
import { HeaderTodo } from '../../styled/divStyled'
import { CheckTheme } from '../../styled/checkStyled'
// import moon from "../../../images/icon-moon-dark.svg"

export const Header = () => {
  const {theme, setTheme} = React.useContext(ContextTheme)
  
  
  const handleCheck=()=>{
    setTheme(!theme)
  }

  return (

    <HeaderTodo>
      <h1>TODO</h1>
      <CheckTheme 
      onClick={handleCheck}
      theme={theme}></CheckTheme>
    </HeaderTodo>
  )
}
