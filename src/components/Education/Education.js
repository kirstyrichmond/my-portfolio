import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/index.js'
import { Container, EducationContainer, EducationInfo, EducationDate, EducationDescription, EducationLogo, EducationRole, EducationTitle } from './EducationStyles.js'
import { education } from '../../constants/constants.js'

const Education = () => (
    <Section>
        <SectionDivider />
        <SectionTitle $main>Education</SectionTitle>
        <Container>
            {education.map(({ id, logo, title, date, institution, role, description }) => (
                <EducationContainer key={id}>
                    <EducationLogo src={logo} />
                    <EducationInfo>
                        <EducationTitle>{title}</EducationTitle>
                        <EducationDate>{date}</EducationDate>
                        <EducationRole>{institution}</EducationRole>
                        {role && <EducationRole>{role}</EducationRole>}
                        <EducationDescription>
                            {description}
                        </EducationDescription>
                    </EducationInfo>
                </EducationContainer>
            ))}
        </Container>
    </Section>
)

export default Education