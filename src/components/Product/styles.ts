import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 285px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: .5rem;
  overflow: hidden;
  animation: opacity 0.5s ease-in;

  @keyframes opacity{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 47%;
  object-fit: scale-down;
`;

export const InfoDiv = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
  flex: 1;
`;

export const ProductInfo = styled.header`
  display: flex;
  justify-content: space-between;

  span{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.1875rem;
    color: #2c2c2c;
  }

  strong{
    background-color: #373737;
    color: #fff;
    padding: 0.25rem 0.375rem;
    font-size: 0.9375rem;
    border-radius: 0.3125rem;
    height: fit-content;
    width: 4.625rem;
    height: 1.625rem;
    text-align: center;
  }
`;

export const ProductDescription = styled.p`
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 0.75rem;
  color: #2c2c2c;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  background-color: #0F52BA;
  color: #fff;
  padding: .5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  cursor: pointer;

  img{
    width: .875rem;
    height: .875rem;
  }
`;

