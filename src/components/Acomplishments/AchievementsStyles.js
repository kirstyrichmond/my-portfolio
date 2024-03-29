import styled from "styled-components";

export const Boxes = styled.div`
  width: 88%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 24px;
  margin: 24px 0 40px 72px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  height: 148px;
  padding: 24px;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 128px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 104px;
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 82px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 24px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
