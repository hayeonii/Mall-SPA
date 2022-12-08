import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import heart from '../../assets/images/icon-heart.svg'
import useGetData from '../../hooks/useGetData'

const ProductItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const ProductImg = styled.img`
    width: 380px;
    height: 380px;
    border: 1px solid #BDBDBD;
    border-radius: 10px;
    overflow: hidden;
`
const ProductTitle = styled.p`
    width: 338px;
    margin-top: 20px;
    font-size: 18px;
    line-height: 22px;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

const ProductPrice = styled.strong`
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;

    span {
        font-size: 16px;
        font-weight: 400;
        margin-left: 2px;
    }
`

const LikeBtn = styled.button`
    position: absolute;
    width: 22px;
    height: 22px;
    right: 0;
    bottom: 34px;
    background: url(${heart}) no-repeat center / contain;
    border-style: none;
`

export default function Product({productName, price, thumbnailImg }) {
    return (
        <ProductItem>
            <ProductImg src={`https://test.api.weniv.co.kr/${thumbnailImg}`} alt="" />
            <ProductTitle>{productName}</ProductTitle>
            <ProductPrice>{price}<span>원</span></ProductPrice>
            <LikeBtn></LikeBtn>
        </ProductItem>
    )
}
