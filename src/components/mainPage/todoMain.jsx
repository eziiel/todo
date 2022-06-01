
import React from 'react'
import { BackgroundDesktop } from '../styled/bakgroundStyled'
import { MainContent } from '../pages/mainContent/MainContent'
import { GlobalStyled } from "../styled/globalStyled"
import { ContextTheme } from '../context/contextTheme'


export const TodoMain = () => {
  const {theme} = React.useContext(ContextTheme)



  return (
    <>
      <GlobalStyled theme = {theme}/> 
      <BackgroundDesktop/>
      <MainContent />
    
    </>
    )

  }

