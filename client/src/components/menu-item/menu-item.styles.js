import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '330px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
  flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  /* height: 90px; */
  /* width: 90%; */
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.9;
  /* position: absolute; */

  @media screen and (max-width: 800px) {
    width: 25%;
  }

  @media screen and (max-width: 460px) {
    width: 45%;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 14px;
  color: #4a4a4a;

  @media screen and (max-width: 460px) {
   /* font-size: x-small; */
  }
`;

export const ContentSubtitle = styled.span`
  /* font-weight: lighter; */
  
  @media screen and (max-width: 460px) {
   /* font-size: x-small; */
  }
`;

export const SizeContainer = styled.div`
    width: 80%;
    height: 20%;
    padding-top: 4%;
    display: flex;
    flex-direction: column;
    font-size: 14px;

    @media screen and (max-width: 460px) {
      padding-top: 0;
   /* font-size: x-small; */
  }
`;

export const MediumContent = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LargeContent = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SizeName = styled.span`
  width: 90%;
  /* margin-bottom: 5px; */
`;

export const PriceName = styled.span`
  /* width: 10%; */
  /* text-align: right; */
`;