import React, { useState } from 'react';
import { Container, Title, Lead, CrapsTable, Block, Puck, ButtonContainer, Button, Chip, BetSection, TurnOffPuckButton, Note, BackToToolsLink } from './InteractiveTool6Styles';

const numbers = [4, 5, 6, 8, 9, 10];
const positions = {
    4: 'calc(10% + 0px)',
    5: 'calc(26.67% + 0px)',
    6: 'calc(43.33% + 0px)',
    8: 'calc(60% + 0px)',
    9: 'calc(76.67% + 0px)',
    10: 'calc(93.33% + 0px)'
};

const initialBets = {
    inside: [],
    outside: [],
    across: ['$162 Across']
};

const betAmounts = {
    '$110 Inside': { 5: 25, 6: 30, 8: 30, 9: 25 },
    '$85 Inside': { 5: 25, 6: 30, 8: 30, 9: 25 },
    '$80 Inside': { 5: 25, 6: 30, 8: 30, 9: 25 },
    '$76 Outside': { 4: 25, 5: 25, 9: 25, 10: 25 },
    '$77 Outside': { 4: 25, 5: 25, 9: 25, 10: 25 },
    '$102 Outside': { 4: 25, 5: 25, 9: 25, 10: 25 },
    '$136 Across': { 4: 25, 5: 25, 6: 30, 8: 30, 9: 25, 10: 25 },
    '$137 Across': { 4: 25, 5: 25, 6: 30, 8: 30, 9: 25, 10: 25 },
    '$132 Across': { 4: 25, 5: 25, 6: 30, 8: 30, 9: 25, 10: 25 },
    '$162 Across': { 4: 25, 5: 25, 6: 30, 8: 30, 9: 25, 10: 25 }
};

const getAvailableBets = (point) => {
    const bets = { inside: [], outside: [], across: [] };
    if (point === null) {
        return initialBets;
    }

    if (point === 4) {
        bets.inside.push('$110 Inside');
        bets.outside.push('$76 Outside');
        bets.across.push('$136 Across');
    } else if (point === 5) {
        bets.inside.push('$85 Inside');
        bets.outside.push('$77 Outside');
        bets.across.push('$137 Across');
    } else if (point === 6) {
        bets.inside.push('$80 Inside');
        bets.outside.push('$102 Outside');
        bets.across.push('$132 Across');
    } else if (point === 8) {
        bets.inside.push('$80 Inside');
        bets.outside.push('$102 Outside');
        bets.across.push('$132 Across');
    } else if (point === 9) {
        bets.inside.push('$85 Inside');
        bets.outside.push('$77 Outside');
        bets.across.push('$137 Across');
    } else if (point === 10) {
        bets.inside.push('$110 Inside');
        bets.outside.push('$76 Outside');
        bets.across.push('$136 Across');
    }
    bets.across.push('$162 Across');
    return bets;
};

const getBetAmounts = (bet, point) => {
    let amounts = {};
    if (bet === '$110 Inside' && (point === 4 || point === 10)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$85 Inside' && (point === 5 || point === 9)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$80 Inside' && (point === 6 || point === 8)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$102 Outside' && (point === 6 || point === 8)) {
        amounts = { ...betAmounts[bet] };
    } else if (bet === '$77 Outside' && (point === 5 || point === 9 || point === 4 || point === 10)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$76 Outside' && point === 4) {
        amounts = { 5: 25, 9: 25, 10: 25 };
    } else if (bet === '$76 Outside' && point === 10) {
        amounts = { 4: 25, 5: 25, 9: 25 };
    } else if (bet === '$136 Across' && (point === 4 || point === 10)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$137 Across' && (point === 5 || point === 9)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$132 Across' && (point === 6 || point === 8)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$162 Across') {
        amounts = { ...betAmounts[bet] };
    }
    return amounts;
};

function InteractiveTool() {
    const [point, setPoint] = useState(null);
    const [highlightedNumbers, setHighlightedNumbers] = useState([]);
    const [chipAmounts, setChipAmounts] = useState({});
    const [availableBets, setAvailableBets] = useState(initialBets);

    const handleClickNumber = (num) => {
        setPoint(num);
        setHighlightedNumbers([]);
        setChipAmounts({});
        setAvailableBets(getAvailableBets(num));
    };

    const handleSelectBet = (bet) => {
        const amounts = getBetAmounts(bet, point);
        setChipAmounts(amounts);
        setHighlightedNumbers(Object.keys(amounts).map(Number));
    };

    const handleTurnOffPuck = () => {
        setPoint(null);
        setHighlightedNumbers([]);
        setChipAmounts({});
        setAvailableBets(initialBets);
    };

    return (
        <section id="interactive-tool">
            <Container>
                <Title>$25 Craps Game</Title>
                <Lead>
                    Click on a number to set the point, then choose a popular bet to visualize chip placement.
                </Lead>
                <CrapsTable>
                    {numbers.map(num => (
                        <Block
                            key={num}
                            isHighlighted={highlightedNumbers.includes(num)}
                            isPoint={num === point}
                            onClick={() => handleClickNumber(num)}
                        >
                            {num}
                            {chipAmounts[num] && (
                                <Chip amount={chipAmounts[num]}>{`$${chipAmounts[num]}`}</Chip>
                            )}
                        </Block>
                    ))}
                    {point && (
                        <Puck style={{ left: positions[point], transform: 'translateX(-50%)' }}>
                            ON
                        </Puck>
                    )}
                    {!point && (
                        <Puck isOff>OFF</Puck>
                    )}
                </CrapsTable>
                <BetSection>
                    <Title>Inside Bets</Title>
                    <ButtonContainer>
                        {availableBets.inside.map(bet => (
                            <Button key={bet} onClick={() => handleSelectBet(bet)}>{bet}</Button>
                        ))}
                    </ButtonContainer>
                    <Title>Outside Bets</Title>
                    <ButtonContainer>
                        {availableBets.outside.map(bet => (
                            <Button key={bet} onClick={() => handleSelectBet(bet)}>{bet}</Button>
                        ))}
                    </ButtonContainer>
                    <Title>Across Bets</Title>
                    <ButtonContainer>
                        {availableBets.across.map(bet => (
                            <Button key={bet} onClick={() => handleSelectBet(bet)}>{bet}</Button>
                        ))}
                    </ButtonContainer>
                    <TurnOffPuckButton onClick={handleTurnOffPuck}>Turn Off Puck</TurnOffPuckButton>
                </BetSection>
                <Note>
                    The table minimum is $25, with a maximum bet limit of $3000. Winning bets must not exceed three times the table maximum ($9000 in a $25 game). These limits ensure a fair and enjoyable gaming experience for all participants.
                </Note>
                <BackToToolsLink to="/tips">Return to Interactive Tools</BackToToolsLink>
            </Container>
        </section>
    );
}

export default InteractiveTool;
