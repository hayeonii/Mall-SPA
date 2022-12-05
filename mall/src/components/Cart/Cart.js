import React from 'react'
import styled from 'styled-components'
import CartImg from '../../assets/images/icon-shopping-cart-white.svg'

const CartBtn = styled.div`
    width: 80px;
    height: 80px;
    background: #6327FE url(${CartImg}) no-repeat center / 40px 40px;
    border-radius: 80px;
`

export default function Cart() {
    return (
        <CartBtn></CartBtn>
    )
}
