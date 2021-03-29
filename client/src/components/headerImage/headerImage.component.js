import React from "react";
import { HeaderContainer, HeaderTitle } from './headerImage.styles';

const HeaderAboveHomepage = () => (
    <HeaderContainer>
        <HeaderTitle>Family Pizza House</HeaderTitle>
        {/* <LogoContainer to='/'> */}
                {/* <Logo className='logo' /> */}
                <img src={'https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/142070168_4965469276861771_4467183683439937407_o.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=y8qqXgJeOAAAX-qZR_g&_nc_ht=scontent.fmnl3-1.fna&oh=0c977d877f917ddb520f5ac8bb59f24e&oe=6065113D'}
                    style={{ width: '100%', alignSelf: 'center', height: '450px' }}
                    alt='Logo'
                />
            {/* </LogoContainer> */}
    </HeaderContainer>
);

export default HeaderAboveHomepage;