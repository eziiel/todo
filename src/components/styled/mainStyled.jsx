import styled from "styled-components"

function pixelsToRem (...values) {
  return values
      .reduce((a,i) => (a += i/16 + `rem `),"")
      .trim();
}

const TodoList = styled.main`
  height: 20rem;
  border-radius: 10px;
  background-color: var(--dark-blue2);


`

export {
  TodoList

}