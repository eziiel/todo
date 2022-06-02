import React from 'react'
import { ContextTheme } from '../../context/contextTheme'
import { ButtonDelete } from '../../styled/buttonStyled'
import { Li, Ul } from '../../styled/ulStyled'
import { InputCheck } from '../utils/inputCheck'

export const Todolist = () => {
  const {theme,todos,todoId} = React.useContext(ContextTheme)



  const handleSend =() => {

    console.log(todoId)
  }

  return (
    <Ul theme={theme}>
      {todos && todos.length > 0 && 
      todos.map(({id,todo}) => (
        <Li key={id}>

        <InputCheck 
        // onClick ={handleCheck}    
        id={id}
        value ={todo}
        children={todo}/>

        <ButtonDelete 
        id={+id}
          onClick ={handleSend}
        >X</ButtonDelete>
        
        </Li>
    
      )) 
      || <Li justify = "center">Adicionar Tarefa</Li>
      }
    </Ul>


  )
}
