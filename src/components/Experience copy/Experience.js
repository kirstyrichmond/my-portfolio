import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/index.js'
import { Container, ExperienceContainer, ExperienceInfo, ExperienceDate, ExperienceDescription, ExperienceLogo, ExperienceRole, ExperienceTitle } from './ExperienceStyles.js'

const Experience = () => (
    <Section>
        <SectionDivider />
        <SectionTitle $main>Experience</SectionTitle>
        <Container>
            <ExperienceContainer>
                <ExperienceLogo src='/images/made-by-sauce-logo.jpeg' />
                <ExperienceInfo>
                    <ExperienceTitle>Made By Sauce</ExperienceTitle>
                    <ExperienceRole>Software Developer</ExperienceRole>
                    <ExperienceDate>November 2022 - Present</ExperienceDate>
                    <ExperienceDescription>
                    I assist in the build of many quote and buy software solutions for companies such as Compare the Market using Vue.js. I also assist in the build of bespoke in-house portals for companies such as Howden Insurance and Endsleigh Insurance using React.
                    </ExperienceDescription>
                </ExperienceInfo>
            </ExperienceContainer>
            <ExperienceContainer>
                <ExperienceLogo src='/images/korelogic.jpeg' />
                <ExperienceInfo>
                    <ExperienceTitle>Korelogic</ExperienceTitle>
                    <ExperienceRole>Junior Software Developer</ExperienceRole>
                    <ExperienceDate>April 2022 - October 2022</ExperienceDate>
                    <ExperienceDescription>
                    As part of the team, I assisted on the new build for Korelogic’s Redbox product using React. I used JavaScript and Typescript to manipulate data on both client and server side and I used GraphQL to query the database. I also assisted the designer with user stories, fixed bugs and pair programmed when tackling a difficult challenge.
                    </ExperienceDescription>
                </ExperienceInfo>
            </ExperienceContainer>
        </Container>
    </Section>
)

export default Experience