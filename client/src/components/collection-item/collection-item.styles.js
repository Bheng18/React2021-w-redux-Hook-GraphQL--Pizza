import styled from 'styled-components';
import CustomButton from '../customButton/customButton.component';

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    /* width: 90vw; */
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 0px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
`;

export const NameContainer = styled.span`
  width: 60%;
  /* margin-bottom: 5px; */
`;

export const SizeContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column; 
`;

export const SizeName = styled.div`
   
`;

export const MediumStyle = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-evenly;
`;

export const LargeStyle = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-around;
`;

export const PriceContainer = styled.span`
  width: 10%;
  /* text-align: right; */
`;