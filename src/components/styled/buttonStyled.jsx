import styled from "styled-components";
import { css } from "styled-components";

//to rem
function pixelsToRem(...values) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Button = styled.button`
  cursor: pointer;
  width: 15%;
  height: 100%;
  right: 0;
  border-radius: 10px;
  border: 1px solid var(--dark-blue2);
  background: var(--dark-blue2);
  outline: none;
  letter-spacing: 0.5px;
  color: var(--light);
  font-size: ${pixelsToRem(16)};
  font-weight: bold;

  :disabled {
    opacity: 0.5;
    cursor: auto;
  }

  ${(props) =>
    props.theme == true &&
    css`
      background-color: var(--light);
      border: 1px solid var(--light);
      color: var(--dark-blue);
      ::placeholder {
      }
    `}

  @media (max-width:650px) {
    font-size:.875rem;
    width: auto;
    padding: 0 1rem;
  }
`;

const ButtonDelete = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 1rem;
  color: var(--dark-blue3);
  opacity: 0;
`;

const ButtonSend = styled(Button)`
  position: absolute;
`;

const ButtonFooter = styled(Button)`
  font: var(--text2);
  color: var(--dark-blue-light) ;
  font-size: 1rem;
  font-weight: ${(props) => props.fw};
  padding: ${(props) => props.padding};
  background-color: transparent;
  border: none;
  width: ${(props) => props.width};
  :hover,:focus,::after{
    color: var(--light);
  }
  ${(props) =>
    props.theme == true &&
    css`
      color: var(--dark-blue);
    `}

  ${(props) =>
    props.list && css`
     
      @media (max-width:650px) {
        font-size: .875rem;
        text-align: right;
        padding: 0;
      }

    `}
   
   

`;

export { ButtonSend, ButtonDelete, ButtonFooter };
