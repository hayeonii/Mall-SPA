import React from 'react'
import styled from 'styled-components'
import Cart from '../../components/Cart/Cart'
import Product from '../../components/Products/Product'

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
    return (
        <Wrapper>
            <ProductLists>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </ProductLists>
            <Cart/>
        </Wrapper>
    )
}
