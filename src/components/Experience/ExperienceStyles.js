import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 58px;

    @media ${(props) => props.theme.breakpoints.sm} {
        padding-top: 18px;
 }
`

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    padding-bottom: 60px;
    @media ${(props) => props.theme.breakpoints.md} {
        width: 88%;
        justify-content: center;
  }
`

export const ExperienceInfo = styled.div`
    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
 }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 60%;
 }
`

export const ExperienceLogo = styled.img`
    width: 200px;
    margin-right: 24px;
    max-height: 100%;
    object-fit: contain;

    @media ${(props) => props.theme.breakpoints.md} {
        max-height: 164px;
  }
    
    @media ${(props) => props.theme.breakpoints.sm} {
        max-height: 100px;
        width: 100px;
        margin-right: 18px;
  }
   
`

export const ExperienceTitle = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 8px;
    
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 24px;
  }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 18px;
        margin-bottom: 6px;
  }
`

export const ExperienceDate = styled.p`
    margin-bottom: 8px;
    font-size: 18px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 15px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 12px;
        margin-bottom: 6px;
    }
`

export const ExperienceDescription = styled.p`
    line-height: 1.5;
    font-weight: 300;  
    font-size: 18px;
    opacity: 0.85;
    
    @media ${(props) => props.theme.breakpoints.md} {
        line-height: 1.3;
        font-weight: 300;
        font-size: 16px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        line-height: 1.31;
        font-weight: 300;
        font-size: 14px;
    }
`

export const ExperienceRole = styled.p`
    line-height: 1.5;
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 400;

    @media ${(props) => props.theme.breakpoints.md} {
        line-height: 1.3;
        font-size: 17px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        line-height: 1.3;
        font-size: 14px;
        margin-bottom: 6px;
    }
`