import React from "react";


const ContextTheme = React.createContext()


const ProviderContext = ({children}) => {
  const [theme, setTheme] = React.useState(false)
  const [todos, setTodos] = React.useState()
  const [todoId, setTodoId] = React.useState([])
  const api = "http://localhost:8083/"

  React.useEffect(()=>{
    async function DataTodo () {
      const response = await (await fetch(api)).json()
      setTodos(response)
    }
    DataTodo()
  },[])

  let data = {
    theme, setTheme,todos,api,todoId,setTodoId
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