import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 200px;

  background: #fafafa;
  border: 1px solid #d8d8d8;

  @media screen and (min-width: 320px) {
    padding: 20px 0;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    margin-top: 50px;
  }
`;

export const FooterText = styled.p`
  font-size: 16px;
  line-height: 1.19;
`;

export const List = styled.ul`
  display: flex;
  margin: 20px;
`;
export const ListItem = styled.li`
  margin-left: 30px;
`;
export const ListLink = styled.a``;

export const PinkSmileDown = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    left: 3%;
    top: -178px;
  }
`;
export const GreenSmile = styled.img`
  position: absolute;
  right: -35px;
  top: -141px;
  @media screen and (min-width: 768px) {
    right: 70px;
  }
`;

export const YellowSmileDown = styled.img`
  display: none;
  @media screen and (min-width: 320px) {
    display: block;

    position: absolute;
    right: -2px;
    top: -80px;
  }
`;
