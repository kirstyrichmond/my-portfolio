import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  position: relative;
  margin-bottom: 24px;
  top: 100px;
  padding: 0px 45px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    top: 15px;
    margin: 0 auto;
    padding: 0px 15px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    top: 25px;
    margin: 0 auto;
    padding: 0px 20px;
  }
`;

export const ButtonContainer = styled.div`
  width: 25%;
  margin: 0 auto;
  align-self: center;
`;

export const ProfilePhoto = styled.img`
  border-radius: 50%;
  width: 240px;
  height: 240px;
  object-fit: cover;  
`