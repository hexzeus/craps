import React from 'react';
import { Container, Title, Lead, SubTitle, List, ListItem, StyledLink, StyledButton, HeaderImage, Divider, Image } from './HomeStyles';
import headerImage from '../images/header3.jpg'; // Replace with your header image path
import crapsTableImage from '../images/buffalodice.jpg'; // Correctly import the image

function Home() {
    return (
        <section id="home">
            <HeaderImage src={headerImage} alt="Header Image" />
            <Container>
                <Title>Master Craps: Your Ultimate Guide</Title>
                <Lead>Learn How to Play and Master Craps with Confidence</Lead>

                <Divider />

                <SubTitle>1. The Basics:</SubTitle>
                <List>
                    <ListItem>You play with two dice.</ListItem>
                    <ListItem>The game starts with the "Come-Out Roll".</ListItem>
                    <ListItem>The person who rolls the dice is called the "Shooter".</ListItem>
                </List>

                <Divider />

                <SubTitle>2. Starting the Game:</SubTitle>
                <List>
                    <ListItem>The Shooter makes a "Pass Line" bet.</ListItem>
                    <ListItem>If the first roll (Come-Out Roll) is a 7 or 11, Pass Line bets win.</ListItem>
                    <ListItem>If the roll is 2, 3, or 12, Pass Line bets lose (this is called "crapping out").</ListItem>
                    <ListItem>If any other number is rolled (4, 5, 6, 8, 9, or 10), that number becomes the "Point".</ListItem>
                </List>

                <Divider />

                <SubTitle>3. After the Point is Set:</SubTitle>
                <List>
                    <ListItem>The Shooter keeps rolling until they roll the Point number again (win) or roll a 7 (lose).</ListItem>
                    <ListItem>Rolling the Point again means Pass Line bets win.</ListItem>
                    <ListItem>Rolling a 7 means Pass Line bets lose, and a new round starts with a new Come-Out Roll.</ListItem>
                </List>

                <Divider />

                <SubTitle>4. Other Bets:</SubTitle>
                <List>
                    <ListItem><strong>Don't Pass Line:</strong> Opposite of Pass Line. Wins if the Come-Out Roll is 2 or 3. Loses on 7 or 11. Pushes (no win or loss) on 12.</ListItem>
                    <ListItem><strong>Come Bets:</strong> Similar to Pass Line bets but made after the Point is set.</ListItem>
                    <ListItem><strong>Don't Come Bets:</strong> Similar to Don't Pass Line bets but made after the Point is set.</ListItem>
                    <ListItem><strong>Place Bets:</strong> Bet on specific numbers (4, 5, 6, 8, 9, 10) to be rolled before a 7.</ListItem>
                    <ListItem><strong>Field Bets:</strong> One-roll bet that wins if 2, 3, 4, 9, 10, 11, or 12 is rolled. 2 and 12 have higher payouts.</ListItem>
                    <ListItem><strong>Proposition Bets:</strong> One-roll bets on specific outcomes like Any Craps (2, 3, 12), Any Seven, or specific doubles.</ListItem>
                </List>

                <Divider />

                <SubTitle>5. Payouts:</SubTitle>
                <List>
                    <ListItem><strong>Pass Line Bet:</strong> 1:1</ListItem>
                    <ListItem><strong>Don't Pass Line Bet:</strong> 1:1</ListItem>
                    <ListItem><strong>Come Bet:</strong> 1:1</ListItem>
                    <ListItem><strong>Don't Come Bet:</strong> 1:1</ListItem>
                    <ListItem><strong>Place Bets:</strong> 4 or 10 pays 9:5, 5 or 9 pays 7:5, 6 or 8 pays 7:6</ListItem>
                    <ListItem><strong>Field Bet:</strong> 2 pays 2:1, 12 pays 3:1, others pay 1:1</ListItem>
                    <ListItem><strong>Proposition Bets:</strong> Vary widely (e.g., Any Seven pays 4:1, Any Craps pays 7:1, 2 or 12 pays 30:1)</ListItem>
                </List>

                <Image src={crapsTableImage} alt="Craps Table" />

                <Divider />

                <SubTitle>6. Handling Bets and Payouts:</SubTitle>
                <List>
                    <ListItem>Be quick and accurate with chips.</ListItem>
                    <ListItem>Confirm bet amounts with players to avoid mistakes.</ListItem>
                    <ListItem>Double-check payouts and use a chart if needed.</ListItem>
                    <ListItem>Announce bet amounts and payouts clearly to help new players.</ListItem>
                </List>

                <Divider />

                <SubTitle>Advanced Tips for Dealers:</SubTitle>
                <List>
                    <ListItem>Encourage players to manage their money wisely.</ListItem>
                    <ListItem>Stay professional and ensure the game is fair.</ListItem>
                    <ListItem>Engage with players and provide tips and strategies.</ListItem>
                    <ListItem>Keep learning about new strategies and trends in craps.</ListItem>
                </List>

                <StyledLink to="/tips">
                    <StyledButton>Explore Interactive Tools</StyledButton>
                </StyledLink>
            </Container>
        </section>
    );
}

export default Home;
