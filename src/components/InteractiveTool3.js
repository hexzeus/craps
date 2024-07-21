import React, { useState } from 'react';
import { Container, Title, Lead, BetAmountContainer, Button, BetButton, CenteredContainer, OptionsContainer, PayoutText, Note, Input, BackToToolsLink } from './InteractiveTool3Styles';

const worldBetUnits = [5, 10, 15, 20, 25];

function InteractiveTool3() {
    const [betAmount, setBetAmount] = useState(5);
    const [payout, setPayout] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const handleBetAmountChange = (amount) => {
        setBetAmount(amount);
        calculatePayout(amount, selectedNumber);
    };

    const calculatePayout = (amount, number) => {
        if (!number) return;
        const unit = amount / 5;
        let payout = 0;
        if (number === 2 || number === 12) {
            payout = unit * 30 - unit * 4;
        } else if (number === 3 || number === 11) {
            payout = unit * 15 - unit * 4;
        } else if (number === 7) {
            payout = 0; // Push
        }
        setPayout(`$${amount} WORLD BET pays <span class="highlight">$${payout}</span> if a ${number} rolls`);
    };

    const handleNumberClick = (number) => {
        setSelectedNumber(number);
        calculatePayout(betAmount, number);
    };

    return (
        <section id="interactive-tool3">
            <Container>
                <Title>Interactive Learning Tool: World Bets</Title>
                <Lead>
                    Choose a bet amount, place your world bet, and see the payouts for 2, 3, 7, 11, or 12. A world bet is a $5 increment bet that combines a $4 horn bet with a $1 any seven bet.
                </Lead>
                <BetAmountContainer>
                    {worldBetUnits.map((amount) => (
                        <Button key={amount} onClick={() => handleBetAmountChange(amount)}>
                            ${amount}
                        </Button>
                    ))}
                </BetAmountContainer>
                <Input
                    type="number"
                    value={betAmount}
                    onChange={(e) => handleBetAmountChange(Number(e.target.value))}
                    step="5"
                    min="5"
                />
                <CenteredContainer>
                    <BetButton onClick={() => calculatePayout(betAmount, selectedNumber)}>WORLD BET</BetButton>
                </CenteredContainer>
                <OptionsContainer>
                    {[2, 3, 11, 12, 7].map((number) => (
                        <Button key={number} onClick={() => handleNumberClick(number)}>
                            {number}
                        </Button>
                    ))}
                </OptionsContainer>
                {payout && <PayoutText dangerouslySetInnerHTML={{ __html: payout }} />}
                <Note>
                    2 and 12 pay the same, 3 and 11 pay the same. Any seven pays 4 to 1, making a rolled 7 a push as it covers the horn bet.
                </Note>
                <BackToToolsLink to="/tips">Return to Interactive Tools</BackToToolsLink>
            </Container>
        </section>
    );
}

export default InteractiveTool3;
