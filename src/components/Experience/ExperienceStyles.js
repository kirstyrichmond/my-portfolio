import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 80px;

    @media ${(props) => props.theme.breakpoints.sm} {
        padding-top: 48px;
 }
`

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 832px;
    height: auto;
`

export const ExperienceLogo = styled.img`
    width: 164px;
    margin-right: 24px;
    max-height: 100%;

    @media ${(props) => props.theme.breakpoints.md} {
        max-height: 164px;
  }
    
    @media ${(props) => props.theme.breakpoints.sm} {
        max-height: 100px;
  }
   
`

export const ExperienceTitle = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 8px;
    
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 24px;
  }
`

export const ExperienceDate = styled.p`
    margin-bottom: 8px;
    font-size: 18px;

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 15px;
    }
`

export const ExperienceDescription = styled.p`
    line-height: 1.5;
    font-weight: 300;  
    font-size: 16px;
    opacity: 0.85;
    
    @media ${(props) => props.theme.breakpoints.sm} {
        line-height: 1.3;
        font-weight: 300;
        font-size: 14px;
    }
`

export const ExperienceRole = styled.p`
    line-height: 1.5;
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 400;

    @media ${(props) => props.theme.breakpoints.sm} {
        line-height: 1.3;
        font-size: 17px;
    }
`