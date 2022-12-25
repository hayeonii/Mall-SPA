import React from "react";
import Cart from "../../components/Cart/Cart";
import Product from "../../components/Products/Product";
import useGetData from "../../hooks/useGetData";
import * as S from "./style";

export default function Main() {
  const item = useGetData("https://test.api.weniv.co.kr/mall");

  return (
    <S.Wrapper>
      <S.ProductLists>
        {item.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </S.ProductLists>
      <Cart />
    </S.Wrapper>
  );
}
