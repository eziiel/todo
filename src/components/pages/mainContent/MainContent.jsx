import React from 'react'
// import { ContextTheme } from '../../context/contextTheme'
import { MainDiv } from '../../styled/divStyled'
import { Header } from '../header/Header'
import { InclusaoTodo } from '../inclusao/inclusaoTodo'
import { Todolist } from '../todo/todolist'

export const MainContent = () => {
  // const {theme} = React.useContext(ContextTheme)

  return (

    <MainDiv>
      
      <Header/>
      
      <InclusaoTodo />

      <Todolist />

    </MainDiv>
  )
}
