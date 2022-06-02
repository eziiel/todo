
import React from 'react'
import { InputCheckStyled } from '../../styled/inputStyled'

export const InputCheck = ({children}) => {
  return (
    
    <label>
      
      {children}
      <InputCheckStyled/>
    </label>
 
  )
}
