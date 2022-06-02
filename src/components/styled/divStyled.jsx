import styled from "styled-components"


//func to rem
function pixelsToRem (...values) {
  return values
      .reduce((a,i) => (a += i/16 + `rem `),"")
      .trim();
}

//maindiv
const MainDiv = styled.div`
  margin: -15rem auto;
  width: ${pixelsToRem(650)};
  height: ${pixelsToRem(500)};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: ${pixelsToRem(32)};

  /* background: var(--dark-blue2); */
  background: transparent;

  @media (max-width: 650px) {
    width: ${pixelsToRem(300)};
    height: ${pixelsToRem(500)};
  }
`

//header
const HeaderTodo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: bold;
  color: var(--light);
`



export {
  MainDiv,
  HeaderTodo,

}
