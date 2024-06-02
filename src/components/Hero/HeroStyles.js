import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 0px 45px;
  margin: 64px auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    display: flex;
    flex-direction: column;
    top: 25px;
    padding: 0px 20px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  align-self: center;
  width: 164px;
  height: 64px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100px;
    margin: 18px auto 0;
  }
`;

export const ProfilePhoto = styled.img`
  border-radius: 50%;
  width: 240px;
  height: 240px;
  object-fit: cover; 
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 180px;
    height: 180px;
  }
`