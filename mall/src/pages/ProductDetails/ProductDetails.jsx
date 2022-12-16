import React from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";

export default function ProductDetails() {
  const { id } = useParams();
  const item = useGetData("https://test.api.weniv.co.kr/mall");
  const loadData = { ...item[id - 1] };
  const thumnailImg = `https://test.api.weniv.co.kr/${loadData.thumbnailImg}`;

  // console.log(loadData);

  return (
    <S.Container>
      <S.ItemInfoCont>
        <S.ItemInfoImg src={thumnailImg} alt={loadData.productName} />
        <S.ItemInfo>
          <S.ProductName>{loadData.productName}</S.ProductName>
          <S.ProductPrice>
            {loadData.price}
            <S.PriceUnit>원</S.PriceUnit>
          </S.ProductPrice>
        </S.ItemInfo>
      </S.ItemInfoCont>
    </S.Container>
  );
}
