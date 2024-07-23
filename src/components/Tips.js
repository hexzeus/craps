import React from 'react';
import { Container, Title, Lead, List, ListItem, ResourcesLink, InteractiveToolLink, ToolContainer } from './TipsStyles';

function Tips() {
    return (
        <section id="tips">
            <Container>
                <Title>Interactive Learning Tools</Title>
                <Lead>Enhance your learning experience with our interactive tools.</Lead>
                <ToolContainer>
                    <InteractiveToolLink to="/interactive-tool1">Inside & Outside Numbers</InteractiveToolLink>
                    <InteractiveToolLink to="/interactive-tool3">World Bets Overview</InteractiveToolLink>
                    <InteractiveToolLink to="/interactive-tool2">Horn Bets Guide</InteractiveToolLink>
                    <InteractiveToolLink to="/interactive-tool4">Horn High Bets Explained</InteractiveToolLink>
                    <InteractiveToolLink to="/interactive-tool7">Payout Odds Cheat Sheet</InteractiveToolLink>
                    <InteractiveToolLink to="/interactive-tool5">$15 Place Bets</InteractiveToolLink>
                    <InteractiveToolLink to="/interactive-tool6">$25 Place Bets</InteractiveToolLink>
                </ToolContainer>
                <Title>Tips & Resources</Title>
                <Lead>Explore tips and resources to improve your skills as a craps dealer.</Lead>
                <List>
                    <ListItem>Master the basic rules of craps and all bet types. Understand the game flow and dealer responsibilities.</ListItem>
                    <ListItem>Learn to handle chips efficiently and accurately. Practice chip stacking, cutting, and distribution.</ListItem>
                    <ListItem>Practice quick and correct payouts using our tools. Familiarize yourself with various payout scenarios.</ListItem>
                    <ListItem>Ensure smooth gameplay by managing the table effectively. Keep the game moving and address player needs promptly.</ListItem>
                    <ListItem>Maintain professional and clear communication with players. Use clear and concise language to explain bets and payouts.</ListItem>
                    <ListItem>Stay updated with the latest craps strategies and dealer techniques. Continuous learning will enhance your skills and confidence.</ListItem>
                    <ListItem>Understand and manage common player behaviors. Be prepared to handle different personalities and maintain a positive atmosphere.</ListItem>
                    <ListItem>Develop strong observational skills. Keep an eye on the dice, players, and chips to ensure fair play and prevent cheating.</ListItem>
                </List>
                <p style={{ marginTop: '20px', fontSize: '1.2em' }}>
                    For more detailed guides and video tutorials, visit this <ResourcesLink href="https://www.casinodealerswebsite.com/dealing-craps.html" target="_blank" rel="noopener noreferrer">Resources Page</ResourcesLink>.
                </p>
            </Container>
        </section>
    );
}

export default Tips;
