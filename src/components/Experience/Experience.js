import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Container, ExperienceContainer, ExperienceInfo, ExperienceDate, ExperienceDescription, ExperienceLogo, ExperienceRole, ExperienceTitle } from './ExperienceStyles.js'

const Experience = () => (
    <Section>
        <SectionDivider />
        <SectionTitle $main>Experience</SectionTitle>
        <Container>
            <ExperienceContainer>
                <ExperienceLogo src='/images/made-by-sauce-logo.jpeg' />
                <ExperienceInfo>
                    <ExperienceTitle>Software Developer</ExperienceTitle>
                    <ExperienceDate>November 2022 - Present</ExperienceDate>
                    <ExperienceRole>Made By Sauce</ExperienceRole>
                    <ExperienceDescription>
                    Build quote and buy solutions for Compare the Market and other major insurers using Vue.js and React. Develop responsive, accessible interfaces serving millions of users. Implement complex business logic, state management with Redux/Pinia, and debug production issues. Work in agile teams with backend developers to deliver seamless user experiences.
                    </ExperienceDescription>
                </ExperienceInfo>
            </ExperienceContainer>
            <ExperienceContainer>
                <ExperienceLogo src='/images/korelogic.jpeg' />
                <ExperienceInfo>
                    <ExperienceTitle>Software Developer</ExperienceTitle>
                    <ExperienceDate>April 2022 - October 2022</ExperienceDate>
                    <ExperienceRole>Korelogic</ExperienceRole>
                    <ExperienceDescription>
                    Developed Redbox Platform (white label e-commerce solution) using React, TypeScript, and GraphQL. Built features for client and server-side data processing. Collaborated with designers on user stories, conducted code reviews, and debugged production issues. Practiced pair programming and TDD in an agile environment.
                    </ExperienceDescription>
                </ExperienceInfo>
            </ExperienceContainer>
        </Container>
    </Section>
)

export default Experience