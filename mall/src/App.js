import Main from "./pages/Main/Main";
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    font-family:'Spoqa Han Sans Neo', sans-serif;
  }
`


function App() {
  return (
    <>
      <GlobalStyle/>
      <Main/>
    </>
  );
}
export default App;
