import React from 'react'
import { ContextTheme } from '../../context/contextTheme'
import { ButtonClearAll, ButtonDelete, ButtonSend } from '../../styled/buttonStyled'
import { Li, Ul } from '../../styled/ulStyled'
import { InputCheck } from '../utils/inputCheck'
import { Todo, TodoFooter, TodoList } from '../../styled/mainTodoStyled'
import { TextInfo } from '../../styled/textStyled'

export const Todolist = () => {
  const {theme,todos,todoId,erroFetch,marcados} = React.useContext(ContextTheme)



  const handleSend =() => {

    console.log(todoId)
  }
 
  const handleMarc =() => {
    
    console.log(marcados,todoId)
  }

  return (
    <TodoList theme={theme}>

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
      || <Li justify = "center">{erroFetch}</Li>
      }
    </Ul>
    
    <Todo theme={theme}>

      <TextInfo>{todoId.length} Itens Completed</TextInfo>
      
      <TodoFooter>
        <p>bom dia beto</p>

      </TodoFooter>


      <ButtonClearAll 
      onClick={handleMarc}
      theme={theme}>Clear Completed</ButtonClearAll>


    </Todo>


    </TodoList>


  )
}
