import React from "react";

const ContextTheme = React.createContext();

const ProviderContext = ({ children }) => {
  const [theme, setTheme] = React.useState(false);
  const [todos, setTodos] = React.useState();
  const [todoId, setTodoId] = React.useState([]);
  const [marcados, setMarcados] = React.useState([]);
  const [desmarcados, setDesmarcados] = React.useState([]);

  const erroFetch = "lista vazia";
  const api = "http://localhost:8083/";

  React.useEffect(() => {
    async function DataTodo() {
      const response = await (await fetch(api)).json();
      setTodos(response)
    }
    DataTodo();
  }, []);

  //setar lista de marcados
  React.useEffect(() => {
    let itemMarcado = [];
    todoId.length == 0 && setMarcados([]);
    for (let i in todos) {
      todoId.map((itemT) => {
        if (todos[i].id == itemT) {
          itemMarcado = [...itemMarcado, todos[i]];
        }
      });
    }

    itemMarcado.map(item => item.status = true)
    
    setMarcados(itemMarcado);
  }, [todoId]);

  React.useEffect(() => {
    let IDT = [];
    let dif = [];

    for (let i in todos) {
      IDT.push(todos[i].id);
    }

    for (let j in IDT) {
      if (!todoId.some((item) => item == IDT[j])) {
        dif.push(IDT[j]);
      }
    }

    let novaArr = dif.filter(function (a, i) {
      return dif.indexOf(a) === i;
    });
    let final = []

    for (let i in todos) {
      for (let j in novaArr) {
          if(todos[i].id == novaArr[j]) {
              final.push(todos[i])
          }
      }
  }

  final.map(item => item.status = false)
  setDesmarcados(final) 

  }, [todoId]);

  let data = {
    theme,
    setTheme,
    todos,
    setTodos,
    api,
    todoId,
    setTodoId,
    erroFetch,
    marcados,
    setMarcados,
    desmarcados,
    setDesmarcados,
  };

  return <ContextTheme.Provider value={data}>{children}</ContextTheme.Provider>;
};

export { ContextTheme, ProviderContext };
