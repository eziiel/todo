import styled from "styled-components";
import { css } from "styled-components";

// function pixelsToRem (...values) {
//   return values
//       .reduce((a,i) => (a += i/16 + `rem `),"")
//       .trim();
// }

const TodoList = styled.main`
  /* max-height: 20rem; */
  border-radius: 10px;
  background-color: var(--dark-blue2);
  display: flex;
  flex-direction: column;
  color: var(--light);
  ${(props) =>
    props.theme == true &&
    css`
      background: var(--light);
      color: var(--dark-blue);
    `}
`;

const Todo = styled.div`
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.justify ? "center" : "space-between")};
  align-items: center;
  /* border-bottom: 1px solid var(--light-blue); */
  padding: 1rem;
  color: var(--light);
  ${(props) =>
    props.theme == true &&
    css`
      /* border-bottom: 1px solid var(--dark-blue2); */
      color: var(--dark-blue);
      font-weight: bold;
    `}
  :hover button {
    opacity: 1;
  }
`;

export { TodoList, Todo };
