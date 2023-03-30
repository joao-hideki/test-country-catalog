import styled from 'styled-components';

export const CountryCard = styled.div`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  width: 270px;
  height: 339px;
  border-radius: 8px;

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  > div {
    padding-left: 24px;

    h1 {
      margin-top: 26px;
      margin-bottom: 20px;
      line-height: 27px;
    }

    p {
      & + p {
        margin-top: 14px;
      }

      span {
        font-weight: bold;
      }
    }
  }
`;
export const HomeContainer = styled.div`
  padding: 60px 0;
  max-width: 950px;
  margin: auto;
  display: grid;
  gap: 70px;
  grid-template-columns: repeat(3, 1fr);
`;