import React from 'react'
import { ContextTheme } from '../../context/contextTheme'
import { MainDiv } from '../../styled/divStyled'
import { InputText } from '../../styled/inputStyled'
import { Header } from '../header/Header'

export const MainContent = () => {
  const {theme} = React.useContext(ContextTheme)

  console.log
  return (

    <MainDiv>
      
      <Header/>
      <InputText theme = {theme}/>

    </MainDiv>
  )
}
