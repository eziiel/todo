import React, { useEffect } from "react";
import { Button } from "../utils/button";
import { Input } from "../utils/input";
import { InclusionCompoundForm } from "../../styled/formStyled";
import { ContextTheme } from "../../context/contextTheme";

export const InclusaoTodo = () => {
  const { api } = React.useContext(ContextTheme);
  const [todo, setTodo] = React.useState("");
  const [statusBtn, setStatusBtn] = React.useState(true);

  const handleInput = ({ target }) => {
    setTodo(target.value);
  };

  React.useEffect(() => {
    todo.length > 0 ? setStatusBtn(false) : setStatusBtn(true);
  }, [todo]);

  const handleSend = (e) => {
    e.preventDefault();
    
    fetch(`${api}cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo }),
    });
    setTodo("");
  };

  return (
    <>
      <InclusionCompoundForm
        aria-autocomplete="of"
        theme={handleInput}
        onSubmit={handleSend}
        value={todo}
      >
        <Input
          onChange={handleInput}
        />
        <Button disabled={statusBtn} children="Incluir" />
      </InclusionCompoundForm>
    </>
  );
};
