import React, { useState } from 'react';
import { Container, Title, Lead, BetAmountContainer, Button, BetButton, PayoutText, Input, OptionsContainer, CenteredContainer, Note, BackToToolsLink } from './InteractiveTool2Styles';

const hornBetUnits = [4, 8, 12, 16, 20, 24];

function InteractiveTool2() {
    const [betAmount, setBetAmount] = useState(4);
    const [payout, setPayout] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const handleBetAmountChange = (amount) => {
        setBetAmount(amount);
        setShowOptions(true); // Ensure options remain visible
        if (selectedNumber !== null) {
            calculatePayout(selectedNumber, amount);
        }
    };

    const handleHornBetClick = () => {
        setShowOptions(true);
        setPayout(null); // Reset payout when Horn Bet button is clicked
    };

    const calculatePayout = (number, amount) => {
        const unit = amount / 4;
        let payout = 0;
        if (number === 2 || number === 12) {
            payout = unit * 30 - unit * 3;
        } else if (number === 3 || number === 11) {
            payout = unit * 15 - unit * 3;
        }
        setPayout(`A $${amount} horn bet pays <span class="highlight">$${payout}</span> if ${number} rolls.`);
    };

    const handleNumberClick = (number) => {
        setSelectedNumber(number);
        calculatePayout(number, betAmount);
    };

    return (
        <section id="interactive-tool2">
            <Container>
                <Title>Interactive Learning Tool: Horn Bets</Title>
                <Lead>
                    Explore horn bets with our interactive tool. Horn bets are always in units of 4, covering the numbers 2, 3, 11, and 12. Select a bet amount, place your horn bet, and see the potential payouts.
                </Lead>
                <BetAmountContainer>
                    {hornBetUnits.map((amount) => (
                        <Button key={amount} onClick={() => handleBetAmountChange(amount)}>
                            ${amount}
                        </Button>
                    ))}
                </BetAmountContainer>
                <Lead>Or enter a custom amount (must be a multiple of 4):</Lead>
                <Input
                    type="number"
                    value={betAmount}
                    onChange={(e) => handleBetAmountChange(Number(e.target.value))}
                    step="4"
                    min="4"
                />
                <CenteredContainer>
                    <BetButton onClick={handleHornBetClick}>HORN BET</BetButton>
                </CenteredContainer>
                {showOptions && (
                    <OptionsContainer>
                        {[2, 3, 11, 12].map((number) => (
                            <Button key={number} onClick={() => handleNumberClick(number)}>
                                {number}
                            </Button>
                        ))}
                    </OptionsContainer>
                )}
                {payout && <PayoutText dangerouslySetInnerHTML={{ __html: payout }} />}
                <Note>
                    Note: The payouts for 2 and 12 are the same, and the payouts for 3 and 11 are the same.
                </Note>
                <BackToToolsLink to="/tips">Return to Interactive Tools</BackToToolsLink>
            </Container>
        </section>
    );
}

export default InteractiveTool2;
