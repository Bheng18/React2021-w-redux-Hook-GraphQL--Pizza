import React from "react";
// import './menu-item.styles.scss';
import { 
    BackgroundImageContainer, 
    ContentContainer, 
    ContentSubtitle,
     ContentTitle, 
     MenuItemContainer, 
     SizeContainer,
     MediumContent,
     LargeContent,
     SizeName, 
     PriceName,
    } from './menu-item.styles'
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match, large, medium, priceLarge, priceMedium }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <BackgroundImageContainer className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
              {/* <ContentSubtitle>SHOP NOW</ContentSubtitle> */}
        </ContentContainer>
        <SizeContainer>
            <MediumContent>
                <SizeName>{large}</SizeName>
                <PriceName>{priceLarge ? (<span>&#x20B1;{priceLarge}</span>) : ''}</PriceName>
            </MediumContent>
            <LargeContent>
                <SizeName>{medium}</SizeName>
                <PriceName>{priceMedium ? (<span>&#x20B1;{priceMedium}</span>) : ''}</PriceName>
            </LargeContent>
        </SizeContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);