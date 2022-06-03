
import React from 'react'
import { ContextTheme } from '../../context/contextTheme'
import { LabelCheck, SpanCheck, SpanCheckBorder } from '../../styled/checkStyled'
import { InputCheckStyled } from '../../styled/inputStyled'

export const InputCheck = ({children,id, value,...props}) => {
  const [status, setStatus] = React.useState(false)
  // const [statusCheck, setStatusCheck] = React.useState([])
  const {todos,todoId, setTodoId,marcados,setMarcados} = React.useContext(ContextTheme)


  // todoId && console.log(todoId)

  const handleId =({target}) =>{
    if(target.checked) {
      setTodoId([...todoId,target.id])
      setMarcados([...marcados, todos[id-1]])
    } else {
      setTodoId(todoId.filter((item) => item !== target.id))
      setMarcados(marcados.filter((item) => item.id !=target.id))
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
