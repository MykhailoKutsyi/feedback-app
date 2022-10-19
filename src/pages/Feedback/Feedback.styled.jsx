import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const YellowSmileTop = styled.img`
  position: absolute;
  top: 15px;
  left: 25px;
`;

export const YellowSmileCenter = styled.img`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    left: 47%;
    top: 55%;
  }
`;

export const PinkSmileCenter = styled.img`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    left: 47%;
    top: 55%;
  }
`;

export const Ellipse = styled.img`
  position: absolute;
  top: 80px;
  left: 200px;
  @media screen and (min-width: 768px) {
    left: 500px;
  }
`;

export const Map = styled.img`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    margin-left: 100px;
  }
`;

export const Cloud = styled.img`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
