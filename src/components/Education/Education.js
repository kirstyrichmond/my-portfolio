import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/index.js'
import { Container, EducationContainer, EducationInfo, EducationDate, EducationDescription, EducationLogo, EducationRole, EducationTitle } from './EducationStyles.js'

const Education = () => (
    <Section>
        <SectionDivider />
        <SectionTitle main>Education</SectionTitle>
        <Container>
            <EducationContainer>
                <EducationLogo src='/images/northcoders-logo.png' />
                <EducationInfo>
                    <EducationTitle>Full Stack Software Development</EducationTitle>
                    <EducationDate>October 2021 - March 2022</EducationDate>
                    <EducationRole>Northcoders</EducationRole>
                    <EducationDescription>
                    Northcoders is an immersive course for aspiring software developers. Here, I learnt everything from creating a database with PostgreSQL to creating a front- end mobile app with React Native.
                    </EducationDescription>
                </EducationInfo>
            </EducationContainer>
            <EducationContainer>
                <EducationLogo src='/images/lancaster-uni-logo.jpeg' />
                <EducationInfo>
                    <EducationTitle>BA (HONS) Graphic Design and Visual Communication</EducationTitle>
                    <EducationRole>Upper Second-Class Honours (2:1)</EducationRole>
                    <EducationDate>September 2013 – June 2016</EducationDate>
                    <EducationRole>Lancaster University</EducationRole>
                    <EducationDescription>
                    Web design, UI/UX design, app design, logo design, branding, packaging design, calendar design and advertising.
                    </EducationDescription>
                </EducationInfo>
            </EducationContainer>
        </Container>
    </Section>
)

export default Education