import React from 'react'
import styled from 'styled-components'
import '../../assets/css/reset.css'
import heart from '../../assets/images/icon-heart.svg'

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
    margin-top: 20px;
    font-size: 18px;
    color: #333;
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


export default function Product() {
    return (
        <ProductItem>
            <ProductImg src="https://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg" alt="" />
            <ProductTitle>Hack Your Life 개발자 노트북 파우치</ProductTitle>
            <ProductPrice>29,000<span>원</span></ProductPrice>
            <LikeBtn></LikeBtn>
        </ProductItem>
    )
}
