import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homePage.styles";
// import "./homePage.styles.scss";

const HomePage = () => (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
);

export default HomePage;