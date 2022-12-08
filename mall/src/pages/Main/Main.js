import React from 'react'
import styled from 'styled-components'
import Cart from '../../components/Cart/Cart'
import Product from '../../components/Products/Product'
import useGetData from '../../hooks/useGetData'

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 160px;
    padding-bottom: 156px;
`

const ProductLists = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    width: 1260px;
    margin-right: 60px;
`


export default function Main() {
    const item = useGetData("https://test.api.weniv.co.kr/mall")

    return (
        <Wrapper>
            <ProductLists>
                {item.map(item => <Product key={item.id} {...item} />)}
            </ProductLists>
            <Cart/>
        </Wrapper>
    )
}
