import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Container, ExperienceContainer, ExperienceDate, ExperienceDescription, ExperienceLogo, ExperienceTitle } from './ExperienceStyles.js'

const Experience = () => (
    <Section>
        <SectionDivider />
        <SectionTitle main>Experience</SectionTitle>
        <Container>
            <ExperienceContainer>
                <ExperienceLogo src='/images/korelogic.jpeg' />
                <div>
                    <ExperienceTitle>Korelogic</ExperienceTitle>
                    <ExperienceDate>April 2022 - Present</ExperienceDate>
                    <ExperienceDescription>
                    As part of the team, I am assisting on the new build for Korelogic’s Redbox product using React. I use JavaScript and Typescript to manipulate data on both client and server side and I use GraphQL to query the database. I also assist the designer with user stories, fix bugs and pair program when tackling a difficult challenge.
                    </ExperienceDescription>
                </div>
            </ExperienceContainer>
        </Container>
    </Section>
)

export default Experience