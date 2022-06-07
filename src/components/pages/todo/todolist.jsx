import React, { useEffect } from "react";
import { ContextTheme } from "../../context/contextTheme";
import { ButtonFooter, ButtonDelete } from "../../styled/buttonStyled";
import { Li, Ul } from "../../styled/ulStyled";
import { InputCheck } from "../utils/inputCheck";
import { Todo, TodoList } from "../../styled/mainTodoStyled";
import { TextInfo } from "../../styled/textStyled";
import { FooterTodo } from "../../styled/divStyled";

export const Todolist = () => {
  const {
    api,
    theme,
    todos,
    setTodos,
    todoId,
    setTodoId,
    erroFetch,
    marcados,
    setMarcados,
    desmarcados,
  } = React.useContext(ContextTheme);
  const [list, setList] = React.useState();

  React.useEffect(() => {
    setList(todos);
  }, [todos]);

  const handleSend = (e) => {
    const todo = e.target.id

    fetch(`${api}/excluir/${todo}` ,{
      method : "DELETE",
    })
        
    setTodoId(todoId.filter(item => item != e.target.id))
    setTodos(todos.filter(item => item.id != e.target.id))
  };

  const handleMarc = () => {
    fetch(`${api}/excluirgeral/${todoId}`,{
      method: "DELETE" 
    })

    setTodoId([])
    setMarcados([])
    setTodos(desmarcados)
  };


  const handleList = ({ target }) => {
    if (target.id == "all") {
      setList(todos);
    } else if (target.id == "active") {
      desmarcados.length>0?
      setList(desmarcados):
      setList(todos)
    } else if (target.id == "completed") {
      setList(marcados);
    }
  };

  return (
    <TodoList theme={theme}>
      <Ul theme={theme}>
        {(list &&
          list.length > 0 &&
          list.map(({ id, todo, status }) => (
            <Li key={id}>
              <InputCheck id={id} value={todo} status={status} children={todo} />

              <ButtonDelete id={id} onClick={handleSend} value={todo}>
                X
              </ButtonDelete>
            </Li>
          ))) || <Li justify="center">{erroFetch}</Li>}
      </Ul>

      <Todo theme={theme}>
        <TextInfo>{todoId.length} Itens Completed</TextInfo>

        <FooterTodo>
          <ButtonFooter
            theme={theme}
            padding=" .5rem"
            width="auto"
            id="all"
            onClick={handleList}
          >
            All
          </ButtonFooter>
          <ButtonFooter
            theme={theme}
            padding=" .5rem"
            width="auto"
            id="active"
            onClick={handleList}
          >
            Active
          </ButtonFooter>
          <ButtonFooter
            theme={theme}
            padding=" .5rem"
            width="auto"
            id="completed"
            onClick={handleList}
          >
            Completed
          </ButtonFooter>
        </FooterTodo>

        <ButtonFooter width="150px" onClick={handleMarc} theme={theme}>
          Clear Completed
        </ButtonFooter>
      </Todo>
    </TodoList>
  );
};
