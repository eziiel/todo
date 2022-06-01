import React from 'react'
// import { ContextTheme } from '../../context/contextTheme'
import { MainDiv } from '../../styled/divStyled'
import { TodoList } from '../../styled/mainStyled'
import { Header } from '../header/Header'
import { InclusaoTodo } from '../inclusao/inclusaoTodo'

export const MainContent = () => {
  // const {theme} = React.useContext(ContextTheme)

  return (

    <MainDiv>
      
      <Header/>
      
      <InclusaoTodo />

      <TodoList />

    </MainDiv>
  )
}
