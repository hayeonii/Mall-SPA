import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useGetData from "../../hooks/useGetData";

export default function Product({ id, productName, price, thumbnailImg }) {
  const navigate = useNavigate();

  const GoToDetail = () => {
    navigate(`/product/${id}`);
  };

  return (
    <S.ProductItem onClick={GoToDetail}>
      <S.ProductImg
        src={`https://test.api.weniv.co.kr/${thumbnailImg}`}
        alt=""
      />
      <S.ProductTitle>{productName}</S.ProductTitle>
      <S.ProductPrice>
        {price}
        <span>원</span>
      </S.ProductPrice>
      <S.LikeBtn></S.LikeBtn>
    </S.ProductItem>
  );
}
