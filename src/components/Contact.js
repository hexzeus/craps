import React from 'react';
import { Container, Title, Lead, ContactInfo, InfoItem, InfoLabel, InfoValue, StyledLink, StyledButton, Divider } from './ContactStyles';

function Contact() {
    return (
        <section id="contact">
            <Container>
                <Title>Contact Us</Title>
                <Lead>Get in touch with us for more information.</Lead>
                <ContactInfo>
                    <InfoItem>
                        <InfoLabel>Address:</InfoLabel>
                        <InfoValue>1 Fulton St, Buffalo, NY 14204</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>Phone:</InfoLabel>
                        <InfoValue>1-877-8-SENECA</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>Email:</InfoLabel>
                        <InfoValue><a href="mailto:info@buffalocreekcraps.com">info@buffalocreekcraps.com</a></InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>Office Hours:</InfoLabel>
                        <InfoValue>Monday - Friday, 4:00 PM - 12:00 AM</InfoValue>
                    </InfoItem>
                </ContactInfo>
                <Divider />
                <StyledLink to="/">
                    <StyledButton>Back to Home</StyledButton>
                </StyledLink>
            </Container>
        </section>
    );
}

export default Contact;
