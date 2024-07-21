import React, { useState } from 'react';
import { Container, Title, Lead, BetAmountContainer, Button, BetButton, CenteredContainer, OptionsContainer, PayoutText, Note, Input, BackToToolsLink } from './InteractiveTool4Styles';

const hornHighBetUnits = [5, 10, 15, 20, 25];

function InteractiveTool4() {
    const [betAmount, setBetAmount] = useState(5);
    const [payout, setPayout] = useState(null);
    const [selectedHornHigh, setSelectedHornHigh] = useState(null);

    const handleBetAmountChange = (amount) => {
        setBetAmount(amount);
        setPayout(null);
        setSelectedHornHigh(null);
    };

    const handleHornHighClick = (hornHigh) => {
        setSelectedHornHigh(hornHigh);
        setPayout(null); // Reset payout when a new Horn High Bet button is clicked
    };

    const calculatePayout = (number) => {
        const unit = betAmount / 5;
        let payout = 0;

        if (selectedHornHigh === 2 || selectedHornHigh === 12) {
            if (number === selectedHornHigh) {
                payout = unit * 57; // High side hits directly
            } else if (number === 2 || number === 12) {
                payout = unit * 26; // High side hits indirectly
            } else if (number === 3 || number === 11) {
                payout = unit * 11; // Low side hits indirectly
            }
        } else if (selectedHornHigh === 3 || selectedHornHigh === 11) {
            if (number === selectedHornHigh) {
                payout = unit * 27; // Low side hits directly
            } else if (number === 3 || number === 11) {
                payout = unit * 11; // Low side hits indirectly
            } else if (number === 2 || number === 12) {
                payout = unit * 26; // High side hits indirectly
            }
        }

        setPayout(`A $${betAmount} HORN HIGH ${selectedHornHigh} bet pays <span class="highlight">$${payout}</span> if ${number} rolls.`);
    };

    return (
        <section id="interactive-tool4">
            <Container>
                <Title>Interactive Learning Tool: Horn High Bets</Title>
                <Lead>
                    Choose a bet amount, place your horn high bet, and see the payouts for 2, 3, 11, or 12. $5 Horn High bets are $4 horn bets with an extra dollar on the selected number.
                </Lead>
                <BetAmountContainer>
                    {hornHighBetUnits.map((amount) => (
                        <Button key={amount} onClick={() => handleBetAmountChange(amount)}>
                            ${amount}
                        </Button>
                    ))}
                </BetAmountContainer>
                <Lead>Or enter a custom amount (must be a multiple of 5):</Lead>
                <Input
                    type="number"
                    value={betAmount}
                    onChange={(e) => handleBetAmountChange(Number(e.target.value))}
                    step="5"
                    min="5"
                />
                <CenteredContainer>
                    <BetButton onClick={() => handleHornHighClick(2)} isActive={selectedHornHigh === 2}>HORN HIGH 2</BetButton>
                    <BetButton onClick={() => handleHornHighClick(12)} isActive={selectedHornHigh === 12}>HORN HIGH 12</BetButton>
                    <BetButton onClick={() => handleHornHighClick(3)} isActive={selectedHornHigh === 3}>HORN HIGH 3</BetButton>
                    <BetButton onClick={() => handleHornHighClick(11)} isActive={selectedHornHigh === 11}>HORN HIGH 11</BetButton>
                </CenteredContainer>
                {selectedHornHigh !== null && (
                    <OptionsContainer>
                        {[2, 3, 11, 12].map((number) => (
                            <Button key={number} onClick={() => calculatePayout(number)}>
                                {number}
                            </Button>
                        ))}
                    </OptionsContainer>
                )}
                {payout && <PayoutText dangerouslySetInnerHTML={{ __html: payout }} />}
                <Note>
                    Note: In a Horn High bet, the extra dollar is placed on the selected number.
                </Note>
                <BackToToolsLink to="/tips">Return to Interactive Tools</BackToToolsLink>
            </Container>
        </section>
    );
}

export default InteractiveTool4;
