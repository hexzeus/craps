import React from 'react';
import {
    Container,
    Title,
    Lead,
    CrapsTable,
    Section,
    SectionTitle,
    SectionContent,
    Payout,
} from './InteractiveTool7Styles';

const sections = [
    {
        title: 'Pass Line',
        content: [
            'A bet for the shooter to win.',
            '7 or 11 on the come-out roll wins even money.',
            '2, 3, or 12 on the come-out roll loses.',
            'Point number (4, 5, 6, 8, 9, 10) must be rolled again before a 7 to win.',
        ],
    },
    {
        title: 'Don’t Pass',
        content: [
            'A bet against the shooter.',
            '2 or 3 on the come-out roll wins even money.',
            '7 or 11 on the come-out roll loses.',
            '12 on the come-out roll is a push.',
            'Point number (4, 5, 6, 8, 9, 10) must not be rolled again before a 7 to win.',
        ],
    },
    {
        title: 'Come',
        content: [
            'Similar to the Pass Line bet but made after the come-out roll.',
            '7 or 11 wins even money.',
            '2, 3, or 12 loses.',
            'Point number (4, 5, 6, 8, 9, 10) must be rolled again before a 7 to win.',
        ],
    },
    {
        title: 'Don’t Come',
        content: [
            'Similar to the Don’t Pass bet but made after the come-out roll.',
            '2 or 3 wins even money.',
            '7 or 11 loses.',
            '12 is a push.',
            'Point number (4, 5, 6, 8, 9, 10) must not be rolled again before a 7 to win.',
        ],
    },
    {
        title: 'Field',
        content: [
            'A one-roll bet.',
            'Wins if the next roll is 2, 3, 4, 9, 10, 11, or 12.',
            '2 pays 2:1 and 12 pays 3:1.',
            'All other numbers lose.',
        ],
    },
    {
        title: 'Free Odds',
        content: [
            'An additional bet made after a point is established.',
            'Pays true odds if the point is made before a 7.',
            'Must be a multiple of the original Pass or Come bet.',
        ],
    },
    {
        title: 'Hardways',
        content: [
            'A bet that the shooter will roll a specific double (e.g., 2-2, 3-3) before a 7 or an easier combination of the number.',
            '4 and 10 pay 7:1.',
            '6 and 8 pay 9:1.',
        ],
    },
];

const payouts = [
    { number: 4, odds: '9:5' },
    { number: 5, odds: '7:5' },
    { number: 6, odds: '7:6' },
    { number: 8, odds: '7:6' },
    { number: 9, odds: '7:5' },
    { number: 10, odds: '9:5' },
];

function InteractiveTool7() {
    return (
        <section id="interactive-tool">
            <Container>
                <Title>Craps Table Odds and Payouts</Title>
                <Lead>
                    Use this interactive tool to understand the odds and payouts for various bets on a craps table. Click on each section to learn more.
                </Lead>
                <CrapsTable>
                    {sections.map((section, index) => (
                        <Section key={index}>
                            <SectionTitle>{section.title}</SectionTitle>
                            {section.content.map((line, idx) => (
                                <SectionContent key={idx}>{line}</SectionContent>
                            ))}
                        </Section>
                    ))}
                    <Section>
                        <SectionTitle>Place Bets</SectionTitle>
                        {payouts.map((payout) => (
                            <Payout key={payout.number}>
                                {payout.number}: {payout.odds}
                            </Payout>
                        ))}
                    </Section>
                </CrapsTable>
            </Container>
        </section>
    );
}

export default InteractiveTool7;
