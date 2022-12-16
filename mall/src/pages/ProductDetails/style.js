import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
  border: 1px solid red;
`;

export const ItemInfoCont = styled.section`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const ItemInfoImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
`;

export const ProductName = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #333;
`;
