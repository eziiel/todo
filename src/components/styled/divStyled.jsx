import styled from "styled-components"


//func to rem
function pixelConfig(item) {
  item = item/16 + "rem"
  return item
}


//maindiv
const MainDiv = styled.div`
  margin: -15rem auto;
  width: ${pixelConfig(650)};
  height: ${pixelConfig(500)};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: ${pixelConfig(32)};

  background: var(--dark-blue2);
  background: transparent;

  @media (max-width: 650px) {
    width: ${pixelConfig(300)};
    height: ${pixelConfig(500)};
  }
`

//header
const HeaderTodo = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--light);
  font-size: 2rem;
  font-weight: bold;
`


export {
  MainDiv,
  HeaderTodo,
}
