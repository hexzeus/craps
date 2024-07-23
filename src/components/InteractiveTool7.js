import React, { useState } from 'react';
import Modal from 'react-modal';
import {
    Container,
    Title,
    Lead,
    CrapsTable,
    Row,
    Block,
    Odds,
    Passline,
    PasslineOddsContainer,
    PasslineOdds,
    Chip,
    BackToToolsLink,
    Note,
    ModalContent,
    ChipDisplay,
    ModalChip,
    OddsTitle,
    modalStyles,
} from './InteractiveTool7Styles';

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

const payoutInfo = {
    4: {
        placeBet: [
            { bet: '$5', payout: '$9' },
            { bet: '$10', payout: '$18' },
            { bet: '$15', payout: '$27' },
            { bet: '$20', payout: '$36' },
            { bet: '$25', payout: '$45' },
            { bet: '$30', payout: '$54' },
            { bet: '$35', payout: '$63' },
            { bet: '$40', payout: '$72' },
            { bet: '$45', payout: '$81' },
            { bet: '$50', payout: '$90' },
        ],
        passline: [
            { bet: '$5', payout: '$10' },
            { bet: '$10', payout: '$20' },
            { bet: '$15', payout: '$30' },
            { bet: '$20', payout: '$40' },
            { bet: '$25', payout: '$50' },
            { bet: '$30', payout: '$60' },
            { bet: '$35', payout: '$70' },
            { bet: '$40', payout: '$80' },
            { bet: '$45', payout: '$90' },
            { bet: '$50', payout: '$100' },
        ],
    },
    5: {
        placeBet: [
            { bet: '$5', payout: '$7' },
            { bet: '$10', payout: '$14' },
            { bet: '$15', payout: '$21' },
            { bet: '$20', payout: '$28' },
            { bet: '$25', payout: '$35' },
            { bet: '$30', payout: '$42' },
            { bet: '$35', payout: '$49' },
            { bet: '$40', payout: '$56' },
            { bet: '$45', payout: '$63' },
            { bet: '$50', payout: '$70' },
        ],
        passline: [
            { bet: '$6', payout: '$9' },
            { bet: '$10', payout: '$15' },
            { bet: '$16', payout: '$24' },
            { bet: '$20', payout: '$30' },
            { bet: '$26', payout: '$39' },
            { bet: '$30', payout: '$45' },
            { bet: '$36', payout: '$54' },
            { bet: '$40', payout: '$60' },
            { bet: '$46', payout: '$69' },
            { bet: '$50', payout: '$75' },
        ],
    },
    6: {
        placeBet: [
            { bet: '$6', payout: '$7' },
            { bet: '$12', payout: '$14' },
            { bet: '$18', payout: '$21' },
            { bet: '$24', payout: '$28' },
            { bet: '$30', payout: '$35' },
            { bet: '$36', payout: '$42' },
            { bet: '$42', payout: '$49' },
            { bet: '$48', payout: '$56' },
            { bet: '$54', payout: '$63' },
            { bet: '$60', payout: '$70' },
        ],
        passline: [
            { bet: '$5', payout: '$6' },
            { bet: '$10', payout: '$12' },
            { bet: '$15', payout: '$18' },
            { bet: '$20', payout: '$24' },
            { bet: '$25', payout: '$30' },
            { bet: '$30', payout: '$36' },
            { bet: '$35', payout: '$42' },
            { bet: '$40', payout: '$48' },
            { bet: '$45', payout: '$54' },
            { bet: '$50', payout: '$60' },
        ],
    },
    8: {
        placeBet: [
            { bet: '$6', payout: '$7' },
            { bet: '$12', payout: '$14' },
            { bet: '$18', payout: '$21' },
            { bet: '$24', payout: '$28' },
            { bet: '$30', payout: '$35' },
            { bet: '$36', payout: '$42' },
            { bet: '$42', payout: '$49' },
            { bet: '$48', payout: '$56' },
            { bet: '$54', payout: '$63' },
            { bet: '$60', payout: '$70' },
        ],
        passline: [
            { bet: '$5', payout: '$6' },
            { bet: '$10', payout: '$12' },
            { bet: '$15', payout: '$18' },
            { bet: '$20', payout: '$24' },
            { bet: '$25', payout: '$30' },
            { bet: '$30', payout: '$36' },
            { bet: '$35', payout: '$42' },
            { bet: '$40', payout: '$48' },
            { bet: '$45', payout: '$54' },
            { bet: '$50', payout: '$60' },
        ],
    },
    9: {
        placeBet: [
            { bet: '$5', payout: '$7' },
            { bet: '$10', payout: '$14' },
            { bet: '$15', payout: '$21' },
            { bet: '$20', payout: '$28' },
            { bet: '$25', payout: '$35' },
            { bet: '$30', payout: '$42' },
            { bet: '$35', payout: '$49' },
            { bet: '$40', payout: '$56' },
            { bet: '$45', payout: '$63' },
            { bet: '$50', payout: '$70' },
        ],
        passline: [
            { bet: '$6', payout: '$9' },
            { bet: '$10', payout: '$15' },
            { bet: '$16', payout: '$24' },
            { bet: '$20', payout: '$30' },
            { bet: '$26', payout: '$39' },
            { bet: '$30', payout: '$45' },
            { bet: '$36', payout: '$54' },
            { bet: '$40', payout: '$60' },
            { bet: '$46', payout: '$69' },
            { bet: '$50', payout: '$75' },
        ],
    },
    10: {
        placeBet: [
            { bet: '$5', payout: '$9' },
            { bet: '$10', payout: '$18' },
            { bet: '$15', payout: '$27' },
            { bet: '$20', payout: '$36' },
            { bet: '$25', payout: '$45' },
            { bet: '$30', payout: '$54' },
            { bet: '$35', payout: '$63' },
            { bet: '$40', payout: '$72' },
            { bet: '$45', payout: '$81' },
            { bet: '$50', payout: '$90' },
        ],
        passline: [
            { bet: '$5', payout: '$10' },
            { bet: '$10', payout: '$20' },
            { bet: '$15', payout: '$30' },
            { bet: '$20', payout: '$40' },
            { bet: '$25', payout: '$50' },
            { bet: '$30', payout: '$60' },
            { bet: '$35', payout: '$70' },
            { bet: '$40', payout: '$80' },
            { bet: '$45', payout: '$90' },
            { bet: '$50', payout: '$100' },
        ],
    },
};

function InteractiveCrapsTool() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [modalTitle, setModalTitle] = useState('');

    const openModal = (num, type) => {
        setModalContent(payoutInfo[num][type]);
        setModalTitle(type === 'placeBet' ? placeBetOdds[num] : passlineOdds[num]);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <Container>
            <Title>Payout Odds Cheat Sheet</Title>
            <Lead>
                Click on the odds to view detailed examples of payouts.
            </Lead>
            <CrapsTable>
                <Row>
                    {numbers.map((num) => (
                        <Block key={num} bgColor={blockColors[num]} onClick={() => openModal(num, 'placeBet')}>
                            {num}
                            <Odds>{placeBetOdds[num]}</Odds>
                        </Block>
                    ))}
                </Row>
                <Passline>Passline 1:1</Passline>
                <PasslineOddsContainer>
                    {numbers.map((num) => (
                        <PasslineOdds key={num}>
                            <Chip bgColor={blockColors[num]} onClick={() => openModal(num, 'passline')}>
                                {passlineOdds[num]}
                            </Chip>
                        </PasslineOdds>
                    ))}
                </PasslineOddsContainer>
            </CrapsTable>
            <Note>
                For the odds behind the passline on the 5 and 9, players are advised to make their odds an even number by adding $1 or $5 to their bets to ensure even payouts. Unlike other table games, the craps table doesn't have $2.50 chips, necessitating even odds for the 5 and 9. These guidelines ensure a smooth and fair gaming experience.
            </Note>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Payout Information"
                style={modalStyles}
            >
                <OddsTitle>{modalTitle}</OddsTitle>
                <ModalContent>
                    {modalContent.map((entry, index) => (
                        <ChipDisplay key={index}>
                            <ModalChip bgColor="red">{entry.bet}</ModalChip>
                            <span>=</span>
                            <ModalChip bgColor="green">{entry.payout}</ModalChip>
                        </ChipDisplay>
                    ))}
                </ModalContent>
                <button onClick={closeModal}>Close</button>
            </Modal>
            <BackToToolsLink to="/tips">Return to Interactive Tools</BackToToolsLink>
        </Container>
    );
}

export default InteractiveCrapsTool;
