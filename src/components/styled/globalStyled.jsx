
import React from "react"
import { css } from "styled-components"
import { createGlobalStyle } from "styled-components"
import { ContextTheme } from "../context/contextTheme"
// import styled from "styled-components"


function pixelsToRem (...values) {
  return values
      .reduce((a,i) => (a += i/16 + `rem `),"")
      .trim();
}

const GlobalStyled = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

:root {
  --primary-color:#3a7bfd;
  --background: linear-gradient(135deg,#57ddff, #c058f3);
  //dark theme
  --dark-blue : #161722;
  --dark-blue2: #25273c;
  --dark-blue3: #777a92;
  --dark-blue4: #4d5066;
  --dark-blue4: #4d5066;
  --dark-blue4: #393a4c;

  --light-blue: #cacde8;
  --light-blue2: #e4e5f1;

  // light theme 
  --light:#fafafa;
  --light2:#e4e5f1;
  --light3:#d2d3db;
  --dark-blue-light:#9394a5;
  --dark-blue-light2:#484b6a;

  
  --text1: 600 ${pixelsToRem(14)} 'Karla', sans-serif 
  --text2: 500 ${pixelsToRem(14)} 'Karla', sans-serif 
  --text3: 400 ${pixelsToRem(14)} 'Karla', sans-serif 


}

body{
  font-family: 'Karla', sans-serif;
  background: var(--dark-blue)
}

${props => props.theme == true && css`
  body{
    background: var( --light3)
  }

`}
`


export {
  GlobalStyled
}