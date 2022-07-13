import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 6.25rem);
  padding: 7.5rem 0;
`;

export const ProductSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionCenter = styled.div`
  width: 95vw;
  margin: 0 auto;
  max-width: 950px;
`;

export const ProductsList = styled.div`
  display: grid;
  gap: 1.375rem;
  grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));
`;

