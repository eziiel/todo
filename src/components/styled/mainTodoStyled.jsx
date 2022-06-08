import styled from "styled-components";
import { css } from "styled-components";

const TodoList = styled.main`
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
  padding: 1rem;
  color: var(--light);
  ${(props) =>
    props.theme == true &&
    css`
      color: var(--dark-blue);
      font-weight: bold;
    `}
  :hover button {
    opacity: 1;
  }

  @media (max-width:650px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 1rem; */
  }
`;

export { TodoList, Todo };
