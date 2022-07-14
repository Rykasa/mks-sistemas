import styled from "styled-components";

export const Aside = styled.aside<{ isCartOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  max-width: 486px;
  background: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: ${({ isCartOpen }) => isCartOpen ? 'flex' : 'none'};
  flex-direction: column;
`;

export const AsideCenter = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 2.25rem 0;

  @media (max-width: 486px){
   max-width: 100%;
   padding: 2.25rem 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  padding: 0 1.375rem 0 2.9375rem;
`;

export const Title = styled.strong`
  font-weight: 700;
  font-size: 1.6875rem;
  line-height: 2.0625rem;;
  color: #fff;
  width: 11.25rem;
`;

export const CloseButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 0.9375rem;
  padding: 8px 10px;
  cursor: pointer;
`;

export const CartContainer = styled.div`
  max-width: 385px;
  margin: auto;
  height: calc(100% - 6.0625rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding-bottom: 2.625rem;
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
`;

export const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;

  span{
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 0.9375rem;
    color: #fff;
  }
`;

export const ButtonDiv = styled.div`
  height: 6.0625rem;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #fff;
  text-transform: capitalize;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 0.9375rem;
  cursor: pointer;
`;
