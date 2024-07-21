import React from 'react';
import { Container, Title, Lead, Table, Th, Td, Tr } from './ScheduleStyles';

function Schedule() {
    const schedule = [
        // Week 1
        { date: 'July 22, 2024', class: 'Introduction to Craps' },
        { date: 'July 23, 2024', class: 'Basic Rules and Terminology' },
        { date: 'July 24, 2024', class: 'Table Layout and Basic Bets' },
        { date: 'July 25, 2024', class: 'The Come-Out Roll and Pass Line Bets' },
        { date: 'July 26, 2024', class: 'Don\'t Pass Line Bets' },

        // Week 2
        { date: 'July 29, 2024', class: 'Place Bets and Field Bets' },
        { date: 'July 30, 2024', class: 'Understanding Odds Bets' },
        { date: 'July 31, 2024', class: 'Come Bets and Don\'t Come Bets' },
        { date: 'August 1, 2024', class: 'Advanced Place Bets Strategies' },
        { date: 'August 2, 2024', class: 'Hard Ways and Proposition Bets' },

        // Week 3
        { date: 'August 5, 2024', class: 'Pressing Bets Techniques' },
        { date: 'August 6, 2024', class: 'Betting Systems and Money Management' },
        { date: 'August 7, 2024', class: 'Reading the Table and Betting Trends' },
        { date: 'August 8, 2024', class: 'Understanding House Edge and Payouts' },
        { date: 'August 9, 2024', class: 'High-Risk Bets and Their Uses' },

        // Week 4
        { date: 'August 12, 2024', class: 'Review of Betting Strategies' },
        { date: 'August 13, 2024', class: 'Simulated Games for Practice' },
        { date: 'August 14, 2024', class: 'Analyzing Game Results' },
        { date: 'August 15, 2024', class: 'Final Review and Q&A' },
        { date: 'August 16, 2024', class: 'Exam and Certification' },

        // Week 5
        { date: 'August 19, 2024', class: 'Introduction to Advanced Craps' },
        { date: 'August 20, 2024', class: 'Advanced Table Layout Strategies' },
        { date: 'August 21, 2024', class: 'Advanced Come-Out Roll Techniques' },
        { date: 'August 22, 2024', class: 'Advanced Pass Line Strategies' },
        { date: 'August 23, 2024', class: 'Advanced Don\'t Pass Line Strategies' },

        // Week 6
        { date: 'August 26, 2024', class: 'Advanced Place and Field Bets' },
        { date: 'August 27, 2024', class: 'Using Odds Bets Effectively' },
        { date: 'August 28, 2024', class: 'Mastering Come Bets and Don\'t Come Bets' },
        { date: 'August 29, 2024', class: 'Mastering Hard Ways' },
        { date: 'August 30, 2024', class: 'Mastering Proposition Bets' },

        // Week 7
        { date: 'September 2, 2024', class: 'Expert Pressing Bets Techniques' },
        { date: 'September 3, 2024', class: 'Advanced Betting Systems' },
        { date: 'September 4, 2024', class: 'Managing a Large Bankroll' },
        { date: 'September 5, 2024', class: 'In-Depth Table Reading' },
        { date: 'September 6, 2024', class: 'Advanced House Edge Analysis' },

        // Week 8
        { date: 'September 9, 2024', class: 'Advanced High-Risk Bets' },
        { date: 'September 10, 2024', class: 'Comprehensive Strategy Review' },
        { date: 'September 11, 2024', class: 'Simulated High-Level Games' },
        { date: 'September 12, 2024', class: 'Analyzing High-Level Results' },
        { date: 'September 13, 2024', class: 'Final Q&A and Feedback' },
        { date: 'September 16, 2024', class: 'Advanced Exam and Certification' },
        { date: 'September 17, 2024', class: 'Closing Ceremony and Awards' },
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
