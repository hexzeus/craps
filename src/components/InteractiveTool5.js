import React, { useState } from 'react';
import { Container, Title, Lead, CrapsTable, Block, Puck, ButtonContainer, Button, Chip, BetSection, TurnOffPuckButton, Note, BackToToolsLink } from './InteractiveTool5Styles';

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
    across: ['$96 Across']
};

const betAmounts = {
    '$48 Inside': { 5: 15, 6: 18, 8: 18, 9: 15 },
    '$51 Inside': { 5: 15, 6: 18, 8: 18, 9: 15 },
    '$66 Inside': { 5: 15, 6: 18, 8: 18, 9: 15 },
    '$45 Outside': { 4: 15, 5: 15, 9: 15, 10: 15 },
    '$60 Outside': { 4: 15, 5: 15, 9: 15, 10: 15 },
    '$78 Across': { 4: 15, 5: 15, 6: 18, 8: 18, 9: 15, 10: 15 },
    '$81 Across': { 4: 15, 5: 15, 6: 18, 8: 18, 9: 15, 10: 15 },
    '$96 Across': { 4: 15, 5: 15, 6: 18, 8: 18, 9: 15, 10: 15 }
};

const getAvailableBets = (point) => {
    const bets = { inside: [], outside: [], across: [] };
    if (point === null) {
        return initialBets;
    }

    if (point === 5 || point === 9) {
        bets.inside.push('$51 Inside');
        bets.outside.push('$45 Outside');
        bets.across.push('$81 Across');
    }
    if (point === 6 || point === 8) {
        bets.inside.push('$48 Inside');
        bets.outside.push('$60 Outside');
        bets.across.push('$78 Across');
    }
    if (point === 4 || point === 10) {
        bets.inside.push('$66 Inside');
        bets.outside.push('$45 Outside');
        bets.across.push('$81 Across');
    }
    bets.across.push('$96 Across');
    return bets;
};

const getBetAmounts = (bet, point) => {
    let amounts = {};
    if (bet === '$51 Inside' && (point === 5 || point === 9)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$48 Inside' && (point === 6 || point === 8)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$66 Inside' && (point === 4 || point === 10)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$60 Outside' && (point === 6 || point === 8)) {
        amounts = { ...betAmounts[bet] };
    } else if (bet === '$45 Outside' && (point === 5 || point === 9 || point === 4 || point === 10)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$78 Across' && (point === 6 || point === 8)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$81 Across' && (point === 5 || point === 9 || point === 4 || point === 10)) {
        amounts = { ...betAmounts[bet] };
        delete amounts[point];
    } else if (bet === '$96 Across') {
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
                <Title>$15 Craps Game</Title>
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
                    The table minimum is $15, with a maximum bet limit of $2000. Bets on the 6 and 8 have a limit of $2400. Winning bets must not exceed three times the table maximum ($6000 in a $15 game). These limits ensure a fair and balanced gaming environment.
                </Note>

                <BackToToolsLink to="/tips">Return to Interactive Tools</BackToToolsLink>
            </Container>
        </section>
    );
}

export default InteractiveTool;
