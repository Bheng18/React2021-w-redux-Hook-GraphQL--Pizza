import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px; */

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
    /* display: grid;
    grid-template-columns: 1fr;
      grid-gap: 10px; */
  }

  @media screen and (max-width: 650px) {
     /* display: flex;
     flex-direction: row;
     justify-content: space-between;
     margin-right: 10px; */
    display: grid;
    grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
  }

  @media screen and (max-width: 550px) {
     display: flex;
     flex-direction: column;
    /* display: grid;
    grid-template-columns: 1fr;
      grid-gap: 10px; */
  }

  & > div {
    margin-bottom: 30px;
  }
`;