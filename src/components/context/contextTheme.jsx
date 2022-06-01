import React from "react";


const ContextTheme = React.createContext()


const ProviderContext = ({children}) => {
  const [theme, setTheme] = React.useState(false)




  let data = {
    theme, setTheme
  }

  return (
    <ContextTheme.Provider value={data}>
      {children}
    </ContextTheme.Provider>
  )
}

export { 
  ContextTheme,
  ProviderContext,
  
}