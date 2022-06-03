import React from "react";


const ContextTheme = React.createContext()


const ProviderContext = ({children}) => {
  const [theme, setTheme] = React.useState(false)
  const [todos, setTodos] = React.useState()
  const [todoId, setTodoId] = React.useState([])
  const [marcados, setMarcados] = React.useState([])
  const [desmarcados, setDesmarcados] = React.useState([])

  const erroFetch = "lista vazia"
  const api = "http://localhost:8083/"

  React.useEffect(()=>{
    async function DataTodo () {
        const response = await (await fetch(api)).json()
        setTodos(response)
    }
    DataTodo()
  },[])



  // function validatorChecked (id) {
  //   if(!marcados) return null

  //   let res = marcados.every(item => {
  //     item.id != id
  //   })

  //   return res
  // }


  //   // todoId && console.log(todoId)
  //   React.useEffect(()=>{

  //     todoId && todos &&

  //     todoId.map(itemT => {
  //         todos.map(item => {
  //             if(item.id == itemT && validatorChecked(itemT)){
  //                   setMarcados([...marcados,item])
  //             }
  //         })
  //       })
  //   marcados && console.log(marcados)        
  //   },[todoId])



  let data = {
    theme, setTheme,todos,api,todoId,setTodoId,erroFetch,marcados,setMarcados
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