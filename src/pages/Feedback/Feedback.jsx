import React from 'react';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import yellowSmileTop from 'assets/images/yellowSmileTop.svg';
import { YellowSmileTop } from './Feedback.styled';

export default function Feedback() {
  return (
    <>
      <FeedbackForm />
      <YellowSmileTop src={yellowSmileTop} alt="smile" />
    </>
  );
}
