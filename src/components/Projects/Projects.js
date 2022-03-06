import styled from "styled-components";

export const ProjectsContainer = styled.div`
  background: #336b6f;
  display: flex;
  justify-content: center;
  padding: 50px 30px;
  position: relative;
  z-index: 1;
  height: 1000px;
  width: 100% @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  z-index: 3;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ProjectsContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ProjectsH2 = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 850px;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const ProjectsBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsBox = styled.div`
  display: grid;
  grid-gap: 5%;
  margin: 5%;
  margin-top: 0%;
  grid-template-columns: repeat(auto-fill, 30%);
  grid-column-end: span 2;
  padding-top: 0.25rem;
`;

export const ProjectsImageContainer = styled.div`
  width: 100%;
`;

export const ProjectsImg = styled.img`
  width: 100%;
  padding: 10px 0;
`;

export const ProjectsP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 850px;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
