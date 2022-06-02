
import React from 'react'
import { ContextTheme } from '../../context/contextTheme'
import { LabelCheck, SpanCheck, SpanCheckBorder } from '../../styled/checkStyled'
import { InputCheckStyled } from '../../styled/inputStyled'

export const InputCheck = ({children,id, value,...props}) => {
  const [status, setStatus] = React.useState(false)
  // const [statusCheck, setStatusCheck] = React.useState([])
  const {todoId, setTodoId} = React.useContext(ContextTheme)


  const handleId =({target}) =>{
    if(target.checked) {
      setTodoId([...todoId,target.id])
    } else {
      setTodoId(todoId.filter((item) => item !== target.id))
    }
  }
  
  const handleCheck =({target}) =>{
    if(target.checked) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }

  return (
    <>
          <LabelCheck
          status = {status}
          value = {value}
          id={id}
          {...props}
          >  

          <SpanCheck>
            <SpanCheckBorder
              status = {status}
            ></SpanCheckBorder>
          </SpanCheck>

               {children}
      
          <InputCheckStyled
          id={id}
          status = {status}
          onClick={handleCheck}
          onChange={handleId}
          />
    </LabelCheck>
    
    </>
 
  )
}
