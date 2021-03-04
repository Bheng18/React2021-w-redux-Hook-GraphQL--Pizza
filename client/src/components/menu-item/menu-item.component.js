import React from "react";
// import './menu-item.styles.scss';
import { BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer } from './menu-item.styles'
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <BackgroundImageContainer className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
              <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);