import React from 'react'
import { ContextTheme } from '../../context/contextTheme'
import { ButtonDelete } from '../../styled/buttonStyled'
import { Todo, TodoList } from '../../styled/mainTodoStyled'
import { InputCheck } from '../utils/inputCheck'

export const Todolist = () => {
  const {theme,todos} = React.useContext(ContextTheme)
  const [status, setStatus] = React.useState(false)

  // const Padrao =() => {
  //   return (
  //     <Todo justify = "center">Adicionar Tarefa</Todo>
  //   )
  // }

  const handleCheck =({target}) =>{
    setStatus(!status)
    console.log(status)
    console.log(target)
  }


  return (
    <TodoList theme={theme}>
      {todos && todos.length > 0 && 
      todos.map(({id,todo}) => (
        <Todo key={id}>

          <InputCheck children={todo}/>

          <ButtonDelete>X</ButtonDelete>

        </Todo>
          
        // <></>
      
      )) || <Todo justify = "center">Adicionar Tarefa</Todo>
      }
    </TodoList>


  )
}
