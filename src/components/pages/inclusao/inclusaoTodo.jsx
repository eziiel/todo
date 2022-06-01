import React, { useEffect } from 'react'
import { Button } from '../utils/button'
import { Input } from '../utils/input'
import { InclusionCompoundForm } from '../../styled/formStyled'

export const InclusaoTodo = () => {
  const [value, setValue] = React.useState("")
  const [statusBtn, setStatusBtn] =React.useState(true)

  const handleInput =({target}) => {
    setValue(target.value)
  }
  
  
  React.useEffect(()=>{
    value.length > 0 ?setStatusBtn(false):setStatusBtn(true)
  },[value])




  const handleSend=(e)=>{
    e.preventDefault()
    console.log("ativo")
  }

  return (
      <>
        <InclusionCompoundForm
        theme={handleInput}
        onSubmit={handleSend}
        value = {value}
        >
          <Input 
          onChange={handleInput}
          // value={value}
          />
          <Button
          disabled={statusBtn}
          children="Incluir"/>
        </InclusionCompoundForm>
      </>
    )
}
