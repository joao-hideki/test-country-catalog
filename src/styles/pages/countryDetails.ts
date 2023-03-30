import styled from 'styled-components';

export const CountryDetailsContainer = styled.div`
padding-top: 90px;
padding-left: 75px;

> a {
  width: 173px;
  height: 54px;
  line-height: 22px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 20px;
  text-decoration: none;
  color: ${props => props.theme['black-100']};

  span {
    font-weight: 400;
  }
}
`;
export const Details = styled.div`
margin: 60px 0;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 46px;
padding-right: 10px;

> div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    padding-top: 27px;
  }

  section {
    font-size: 18px;
    line-height: 25px;

    p span {
      font-weight: bold;
    }
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 10px;

    span {
      margin-right: 16px;
      font-weight: bold;
    }

    a {
      width: 80px;
      height: 30px;
      border: 1px solid ${props => props.theme['black-100']};
      border-radius: 4px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.black};
    }

    a + a {
      margin-left: 12px;
    }
  }
}
`;