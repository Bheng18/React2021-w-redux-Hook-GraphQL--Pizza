import React from "react";
import Directory from "../../components/directory/directory.component";
import HeaderAboveHomepage from "../../components/headerImage/headerImage.component";
import { HomePageContainer } from "./homePage.styles";
// import "./homePage.styles.scss";

const HomePage = () => (
    <HomePageContainer>
      <HeaderAboveHomepage />
      <Directory />
    </HomePageContainer>
);

export default HomePage;