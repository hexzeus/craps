import React from 'react';
import { Container, Title, Lead } from './HomeStyles';

function Home() {
    return (
        <section id="home">
            <Container>
                <Title>Welcome to Craps Training</Title>
                <Lead>Master the strategies and techniques of craps with our expert guidance.</Lead>
                <p>Whether you're a beginner or looking to refine your skills, our classes provide comprehensive insights and practical tips.</p>
                <p>Join us and elevate your craps game today!</p>
            </Container>
        </section>
    );
}

export default Home;
