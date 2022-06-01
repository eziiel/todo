import React from 'react'
import { ContextTheme } from '../../context/contextTheme'
import { ButtonSend } from '../../styled/buttonStyled'

export const Button = ({children, ...props}) => {
  const {theme} = React.useContext(ContextTheme)
  
  return (
    <ButtonSend 
    {...props}
    theme={theme}>
        {children}
    </ButtonSend>  
  )
}
