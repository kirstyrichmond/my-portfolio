import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/index.js'
import { Container, EducationContainer, EducationInfo, EducationDate, EducationDescription, EducationLogo, EducationRole, EducationTitle } from './EducationStyles.js'

const Education = () => (
    <Section>
        <SectionDivider />
        <SectionTitle $main>Education</SectionTitle>
        <Container>
            <EducationContainer>
                <EducationLogo src='/images/harvard-university-logo.png' />
                <EducationInfo>
                    <EducationTitle>CS50x: CS50’s Introduction To Computer Science</EducationTitle>
                    <EducationDate>August 2024 – December 2024</EducationDate>
                    <EducationRole>Harvard University</EducationRole>
                    <EducationDescription>
                    Comprehensive computer science fundamentals including algorithms, data structures, web development, and database design. Built full-stack applications using C, Python, SQL, JavaScript, and Flask.
                    </EducationDescription>
                </EducationInfo>
            </EducationContainer>
            <EducationContainer>
                <EducationLogo src='/images/northcoders-logo.png' />
                <EducationInfo>
                    <EducationTitle>Full Stack Software Development</EducationTitle>
                    <EducationDate>October 2021 - March 2022</EducationDate>
                    <EducationRole>Northcoders</EducationRole>
                    <EducationDescription>
                    Intensive bootcamp covering full stack JavaScript, React, Node.js, PostgreSQL, and React Native. Built production-ready applications using TDD and agile methodologies. Developed both NC Games (game review platform) and Readcycle (mobile book-sharing app) as course projects.
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
                    Web design, UI/UX design, app design, logo design, branding, packaging design, calendar design and advertising. Developed strong visual problem-solving skills and user-centered design thinking directly applicable to front-end development.
                    </EducationDescription>
                </EducationInfo>
            </EducationContainer>
        </Container>
    </Section>
)

export default Education