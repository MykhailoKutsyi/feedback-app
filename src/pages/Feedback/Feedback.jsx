import React from 'react';

import FeedbackForm from 'components/FeedbackForm/FeedbackForm';

import yellowSmileTop from 'assets/images/yellowSmileTop.svg';
import yellowSmileCenter from 'assets/images/yellowSmileCenter.svg';
import pinkSmileCenter from 'assets/images/pinkSmileCenter.svg';
import ellipse from 'assets/images/ellipse.svg';
import map from 'assets/images/map.png';

import {
  Wrapper,
  YellowSmileTop,
  YellowSmileCenter,
  PinkSmileCenter,
  Map,
  Ellipse,
} from './Feedback.styled';

export default function Feedback() {
  return (
    <>
      <Ellipse src={ellipse} alt="smile" />
      <YellowSmileTop src={yellowSmileTop} alt="smile" />
      <PinkSmileCenter src={pinkSmileCenter} alt="smile" />
      <YellowSmileCenter src={yellowSmileCenter} alt="smile" />
      <Wrapper>
        <FeedbackForm />
        <Map src={map} alt="map" />
      </Wrapper>
    </>
  );
}
