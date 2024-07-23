import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: red;
`;

const Lead = styled.p`
  color: white;
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const CrapsTable = styled.div`
  margin: 20px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  position: relative;
`;

const Block = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: black;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 10px;
  border-radius: 10px;
`;

const Odds = styled.div`
  position: absolute;
  bottom: -20px;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
`;

const Passline = styled.div`
  background-color: yellow;
  color: black;
  padding: 10px;
  margin-top: 40px;  /* Increased margin to create space */
  border-radius: 10px;
  text-align: center;
  font-size: 1.5em;
  position: relative;
`;

const PasslineOddsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const PasslineOdds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Chip = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 5px;
  font-size: 0.8em;
`;

const BackToToolsLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: grey;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: darkgrey;
  }
`;

const numbers = [4, 5, 6, 8, 9, 10];
const placeBetOdds = {
    4: '9:5',
    5: '7:5',
    6: '7:6',
    8: '7:6',
    9: '7:5',
    10: '9:5',
};
const passlineOdds = {
    4: '2:1',
    5: '3:2',
    6: '6:5',
    8: '6:5',
    9: '3:2',
    10: '2:1',
};
const blockColors = {
    4: 'blue',
    10: 'blue',
    5: 'green',
    9: 'green',
    6: 'purple',
    8: 'purple',
};

function InteractiveCrapsTool() {
    return (
        <Container>
            <Title>Payout Odds Cheat Sheet</Title>
            <Lead>
                Quick reference for place bet and passline odds.
            </Lead>
            <CrapsTable>
                <Row>
                    {numbers.map((num) => (
                        <Block key={num} bgColor={blockColors[num]}>
                            {num}
                            <Odds>{placeBetOdds[num]}</Odds>
                        </Block>
                    ))}
                </Row>
                <Passline>Passline</Passline>
                <PasslineOddsContainer>
                    {numbers.map((num) => (
                        <PasslineOdds key={num}>
                            <Chip bgColor={blockColors[num]}>
                                {passlineOdds[num]}
                            </Chip>
                        </PasslineOdds>
                    ))}
                </PasslineOddsContainer>
            </CrapsTable>
            <BackToToolsLink to="/tips">Return to Interactive Tools</BackToToolsLink>
        </Container>
    );
}

export default InteractiveCrapsTool;
