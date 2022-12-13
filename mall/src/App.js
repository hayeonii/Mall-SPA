import Main from "./pages/Main/Main";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import useGetData from "./hooks/useGetData";
import CartAndPayment from "./pages/CartAndPayment/CartAndPayment";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    font-family:'Spoqa Han Sans Neo', sans-serif;
  }
`;

function App() {
  const data = useGetData("https://test.api.weniv.co.kr/mall");

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/product/:id" element={<ProductDetails data={data} />} />
          <Route path="/cart" element={<CartAndPayment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
