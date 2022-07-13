import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #fff;
  border-radius: .5rem;
  padding: 0.9375rem;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  height: 1.125rem;
  width: 1.125rem;
  border-radius: 50%;
  border: none;
  background-color: #000;
  color: #fff;
  font-weight: 400;
  font-size: 0.875rem;
  padding: .65rem;
  line-height: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ProductImage = styled.img``;

export const ProductName = styled.span`
  color: #2c2c2c;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1.0625rem;
`;

export const AmountDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const AmountText = styled.span`
    color: #000;
    font-weight: 400;
    font-size: 0.5rem;
    line-height: 0.375rem;
`;

export const AmountButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  border: .2px solid #BFBFBF;
  border-radius: .25rem;
  padding: 0.25rem .5rem;
`;

export const DecreaseButton = styled.button`
  color: #000;
  font-weight: 400;
  font-size: .75rem;
  line-height: 0.9375rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Amount = styled.span`
  color: #000;
  font-weight: 400;
  font-size: .75rem;
  line-height: 0.9375rem;
  border-inline: 0.2px solid #BFBFBF;
  padding-inline: .5rem;
`;

export const IncreaseButton = styled.button`
  color: #000;
  font-weight: 400;
  font-size: .75rem;
  line-height: 0.9375rem;
  background: none;
  border: none;
  cursor: pointer;
  padding-top: .1rem;
`;

export const Price = styled.strong`
  color: #000;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  padding-top: .5rem;
`;
