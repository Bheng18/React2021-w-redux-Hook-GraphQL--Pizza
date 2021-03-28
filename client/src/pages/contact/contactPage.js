import React from "react";
import ContactDirectory from "../../components/contact/contact.component";

import { ContactPageContainer } from './contactPage.styles';

const ContactPage = () => (
    <ContactPageContainer>
      <ContactDirectory />
    </ContactPageContainer>
);

export default ContactPage;