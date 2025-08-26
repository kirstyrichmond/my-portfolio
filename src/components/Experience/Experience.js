import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Container, ExperienceContainer, ExperienceInfo, ExperienceDate, ExperienceDescription, ExperienceLogo, ExperienceRole, ExperienceTitle } from './ExperienceStyles.js'
import { experience } from '../../constants/constants.js'

const Experience = () => (
    <Section>
        <SectionDivider />
        <SectionTitle $main>Experience</SectionTitle>
        <Container>
            {experience.map(({ id, logo, title, date, company, description }) => (
                <ExperienceContainer key={id}>
                    <ExperienceLogo src={logo} />
                    <ExperienceInfo>
                        <ExperienceTitle>{title}</ExperienceTitle>
                        <ExperienceDate>{date}</ExperienceDate>
                        <ExperienceRole>{company}</ExperienceRole>
                        <ExperienceDescription>
                            {description}
                        </ExperienceDescription>
                    </ExperienceInfo>
                </ExperienceContainer>
            ))}
        </Container>
    </Section>
)

export default Experience