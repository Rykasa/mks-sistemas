import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  .header{
    height: 6.25rem;
    width: 100%; 

    div{
      width: 95vw;
      height: 100%;
      max-width: 1300px;
      margin: auto;
      display: flex;
      justify-content: flex-end;

      .cart-button{
        height: 2.8125rem;
        width: 5.625rem;
        border-radius: .25rem;
        margin-inline: 0;
      }
    }

  }
  main{
    min-height: calc(100vh - 6.25rem);
    width: 100%;
    padding: 7.5rem 0;

    .center{
      width: 95vw;
      margin: 0 auto;
      max-width: 950px;
    }
  
    .list{
      display: grid;
      gap: 1.375rem;
      grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));

      .product{
        width: 100%;
        height: 285px;
        border-radius: .5rem;
      }
    }
  }
`;