import styled from "styled-components";
import { css } from "styled-components";
import moon from "../../images/icon-moon.svg";
import sun from "../../images/icon-sun.svg";
import check from "../../images/icon-check.svg";

const CheckTheme = styled.span`
  background: transparent url(${moon}) center no-repeat;
  cursor: pointer;
  padding: 2rem;

  ${(props) =>
    props.theme == true &&
    css`
      background: transparent url(${sun}) center no-repeat;
    `}
`;

const SpanCheck = styled.span`
  position: absolute;
  left: -8%;
  width: 25px;
  height: 25px;
  top: -10%;
  background: var(--background);
  border-radius: 50%;
  margin: 0.5rem;


  @media (max-width:650px) {
    left: -20%;
  }
`;
const SpanCheckBorder = styled(SpanCheck)`
  position: absolute;
  top: -25.5%;
  left: -25.5%;
  width: 22px;
  height: 22px;
  background: var(--dark-blue2);
  ${(props) =>
    props.theme == true &&
    css`
      background-color: var(--light);
    `}
  ${(props) =>
    props.status == true &&
    css`
      background: var(--background);
      background: url(${check}) center no-repeat;
      background-size: 1rem;
    `}


`;
const LabelCheck = styled.label`
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 0.5rem;
  text-align: left;
  margin-left: 3rem;
  font-weight: bold;
  ${(props) =>
    props.status == true &&
    css`
      text-decoration: line-through;
    `}


    @media (max-width:650px) {
      margin-left: 2.5rem;
      font-size: .875rem;
    }
`;

export { CheckTheme, SpanCheck, SpanCheckBorder, LabelCheck };
