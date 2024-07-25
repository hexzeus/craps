import React from 'react';
import { Container, Title, Lead, Table, Th, Td, Tr } from './ScheduleStyles';

function Schedule() {
    const schedule = [
        // Week 1
        { date: 'July 22, 2024', class: 'Description of craps game' },
        { date: 'July 23, 2024', class: 'Cheque Handling' },
        { date: 'July 24, 2024', class: 'Drop cutting/Pluckin' },
        { date: 'July 25, 2024', class: 'Dice Calls' },
        { date: 'July 26, 2024', class: 'Craps Payout Odds' },
        { date: 'July 29, 2024', class: 'Stick Procedures' },
        { date: 'July 30, 2024', class: 'Physical Handling Stick' },
        { date: 'July 31, 2024', class: 'Selecting Shooter' },
        { date: 'August 1, 2024', class: 'Stick Person Relieved' },
        { date: 'August 2, 2024', class: 'Description Of Dealer Duties' },
        { date: 'August 5, 2024', class: 'Correct Shooting of Dice' },
        { date: 'August 6, 2024', class: 'Dice Retention and Selection' },
        { date: 'August 7, 2024', class: 'Invalid Roll' },
        { date: 'August 8, 2024', class: 'Moving Dice' },
        { date: 'August 9, 2024', class: 'Cocked Dice' },

        // Week 2
        { date: 'August 12, 2024', class: 'Review Previous Week' },
        { date: 'August 13, 2024', class: '36 way Chart' },
        { date: 'August 14, 2024', class: 'Correct Use of Puck' },
        { date: 'August 15, 2024', class: 'Making and Removing Wagers' },
        { date: 'August 16, 2024', class: 'Acknowledging Bets and Booking Bets' },
        { date: 'August 19, 2024', class: 'Duties of Base Dealers' },
        { date: 'August 20, 2024', class: 'Booking bet Chart' },
        { date: 'August 21, 2024', class: 'Game Protection' },
        { date: 'August 22, 2024', class: 'Based Dealer Being Relieved' },
        { date: 'August 23, 2024', class: 'Permissible Wagers' },
        { date: 'August 26, 2024', class: 'Odds payout' },
        { date: 'August 27, 2024', class: 'Pass Line/Don\'t Pass line' },
        { date: 'August 28, 2024', class: 'Paying Multi color Bets' },
        { date: 'August 29, 2024', class: 'Taking and Paying' },
        { date: 'August 30, 2024', class: 'Field Bets' },

        // Week 3
        { date: 'September 2, 2024', class: 'Review Previous Week' },
        { date: 'September 3, 2024', class: 'Come/Don\'t Come Bets' },
        { date: 'September 4, 2024', class: 'Position Around Table' },
        { date: 'September 5, 2024', class: 'Placement of Come Bets' },
        { date: 'September 6, 2024', class: 'Determining Max Odds' },
        { date: 'September 9, 2024', class: 'Laying Odds' },

        // Week 4
        { date: 'September 10, 2024', class: 'Review Previous Week' },
        { date: 'September 11, 2024', class: 'Place Bets' },
        { date: 'September 12, 2024', class: 'Lay Bets' },
        { date: 'September 13, 2024', class: 'Place Bet Charts' },
        { date: 'September 16, 2024', class: 'Bridging Lay Bets' },

        // Week 5
        { date: 'September 17, 2024', class: 'Review Previous Week' },
        { date: 'September 18, 2024', class: 'Horn Bets' },
        { date: 'September 19, 2024', class: 'Horn High Bets' },
        { date: 'September 20, 2024', class: 'Whirl Bets' },
        { date: 'September 23, 2024', class: 'C/E Bets' },
        { date: 'September 24, 2024', class: 'Any Seven' },
        { date: 'September 25, 2024', class: 'Hard Ways' },

        // Week 6
        { date: 'September 26, 2024', class: 'Review Previous Week' },
        { date: 'September 27, 2024', class: 'Hop Bets' },

        // Week 7
        { date: 'September 30, 2024', class: 'Review and practice full game' },
        { date: 'October 1, 2024', class: 'Review and practice full game' },
        { date: 'October 2, 2024', class: 'Review and practice full game' },
        { date: 'October 3, 2024', class: 'Review and practice full game' },
        { date: 'October 4, 2024', class: 'Review and practice full game' },

        // Week 8
        { date: 'October 7, 2024', class: 'Review and practice full game' },
        { date: 'October 8, 2024', class: 'Review and practice full game' },
        { date: 'October 9, 2024', class: 'Review and practice full game' },
        { date: 'October 10, 2024', class: 'Review and practice full game' },
        { date: 'October 11, 2024', class: 'Review and practice full game' },
    ];

    return (
        <section id="schedule">
            <Container>
                <Title>Class Schedule</Title>
                <Lead>Classes are held Monday through Friday from 4:00 PM to 12:00 AM</Lead>
                <Table>
                    <thead>
                        <tr>
                            <Th>Date</Th>
                            <Th>Class</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((session, index) => (
                            <Tr key={index}>
                                <Td>{session.date}</Td>
                                <Td>{session.class}</Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
}

export default Schedule;
