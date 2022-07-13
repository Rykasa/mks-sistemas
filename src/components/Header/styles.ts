import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0F52BA;
  height: 6.25rem;
`;

export const HeaderCenter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95vw;
  margin: auto;
  max-width: 1300px;
`;

export const Logo = styled.div`
  color: #fff;
  line-height: 1.1875rem;

  strong{
    font-size: 2.5rem;
    font-weight: 600;
  }
  span{
    font-size: 1.25rem;
    font-weight: 300;
  }
`;

export const CartButton = styled.button`
  height: 2.8125rem;
  width: 5.625rem;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: .25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CartImg = styled.img`
  height: 1.1875rem;
  width: 1.1875rem;
`;

export const Amount = styled.strong`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.375rem;
`;
