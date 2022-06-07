import React from "react";
import { ContextTheme } from "../../context/contextTheme";
import {
  LabelCheck,
  SpanCheck,
  SpanCheckBorder,
} from "../../styled/checkStyled";
import { InputCheckStyled } from "../../styled/inputStyled";

export const InputCheck = ({ children, id, value, status,...props }) => {
  const {theme} = React.useContext(ContextTheme)

  const {
    todoId,
    setTodoId,
  } = React.useContext(ContextTheme);

  const handleId = ({ target }) => {
    let todoForId = []
    let n = +target.id

    if (target.checked) {
      todoForId = [...todoId,n]
      setTodoId(todoForId.filter((a,i) => todoForId.indexOf(a) === i))
    } else {
      setTodoId(todoId.filter((item) => item !== n));
    }
  };

  return (
    <>
      <LabelCheck status={status} value={value} id={id} {...props}>
        <SpanCheck>
          <SpanCheckBorder theme={theme} status={status}></SpanCheckBorder>
        </SpanCheck>

        {children}

        <InputCheckStyled
          id={id}
          status={status}
          onChange={handleId}
        />
      </LabelCheck>
    </>
  );
};
