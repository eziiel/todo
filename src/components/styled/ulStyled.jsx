import styled from "styled-components";
import { css } from "styled-components";

const Ul = styled.ul`
  list-style: none;
  border-radius: 10px;
  background-color: var(--dark-blue2);
  display: flex;
  flex-direction: column;
  color: var(--light);
  ${(props) =>
    props.theme == true &&
    css`
      background-color: var(--light);
      color: var(--dark-blue);
    `}
  li label input:checked span {
    background: blue;
  }
`;

const Li = styled.li`
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.justify ? "center" : "space-between")};
  align-items: center;
  align-content: center;
  border-bottom: 1px solid var(--light-blue);
  padding: 0.5rem;
  ${(props) =>
    props.theme == true &&
    css`
      border-bottom: 1px solid var(--dark-blue2);
      font-weight: bold;
    `}
  :hover button {
    opacity: 1;
  }
`;

export { Ul, Li };
