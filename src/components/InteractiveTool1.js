import React, { useState } from 'react';
import { Container, Title, Lead, CrapsTable, Block, Puck, ButtonContainer, Button, BackToToolsLink } from './InteractiveTool1Styles';

const numbers = [4, 5, 6, 8, 9, 10];
const positions = {
    4: 'calc(10% + 0px)', // Adjust these values to exact pixel positions
    5: 'calc(26.67% + 0px)',
    6: 'calc(43.33% + 0px)',
    8: 'calc(60% + 0px)',
    9: 'calc(76.67% + 0px)',
    10: 'calc(93.33% + 0px)'
};

function InteractiveTool() {
    const [point, setPoint] = useState(null);
    const [highlightedNumbers, setHighlightedNumbers] = useState([]);

    const handleClickNumber = (num) => {
        setPoint(num);
        setHighlightedNumbers([]);
    };

    const handleInsideClick = () => {
        if (point) {
            setHighlightedNumbers(numbers.filter(num => [5, 6, 8, 9].includes(num) && num !== point));
        }
    };

    const handleOutsideClick = () => {
        if (point) {
            let outsideNumbers;
            switch (point) {
                case 4:
                    outsideNumbers = [5, 9, 10];
                    break;
                case 5:
                    outsideNumbers = [4, 9, 10];
                    break;
                case 6:
                case 8:
                    outsideNumbers = [4, 5, 9, 10];
                    break;
                case 9:
                    outsideNumbers = [4, 5, 10];
                    break;
                case 10:
                    outsideNumbers = [4, 5, 9];
                    break;
                default:
                    outsideNumbers = [];
            }
            setHighlightedNumbers(outsideNumbers);
        }
    };

    const handleTurnOffPuck = () => {
        setPoint(null);
        setHighlightedNumbers([]);
    };

    return (
        <section id="interactive-tool">
            <Container>
                <Title>Interactive Learning Tool: Inside and Outside Numbers</Title>
                <Lead>
                    Learn to distinguish between inside and outside numbers with this tool. Click on a number to set the point and highlight the corresponding inside or outside numbers. Mastering this is essential for managing the game and assisting players accurately.
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
                <ButtonContainer>
                    <Button onClick={handleInsideClick}>Inside Numbers</Button>
                    <Button onClick={handleOutsideClick}>Outside Numbers</Button>
                    <Button onClick={handleTurnOffPuck}>Turn Off Puck</Button>
                </ButtonContainer>
                <BackToToolsLink to="/tips">Return to Interactive Tools</BackToToolsLink>
            </Container>
        </section>
    );
}

export default InteractiveTool;
