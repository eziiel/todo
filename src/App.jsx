
import { ProviderContext } from "./components/context/contextTheme"
import { TodoMain } from "./components/pages/mainPage/todoMain"
// import { GlobalStyled } from "./components/styled/globalStyled"

const App = () => {


  return(
    <>
      <ProviderContext>
      <TodoMain/>
      </ProviderContext>
      
    </>
  )
}

export { App }