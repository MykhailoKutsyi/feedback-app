import React, { useState } from 'react';

import { ErrorMessage, Formik, Form } from 'formik';

import { useDispatch } from 'react-redux';
import { sendFeedback } from 'redux/session/session-operations';

import FeedbackFormValidation from './FeedbackFormValidation';
import Icon from 'components/Icon/Icon';

import {
  FormContainer,
  FormTitle,
  Input,
  Btn,
  BtnTitle,
  InputContainer,
  TextareaContainer,
  Textarea,
  TextareaErrorWrapper,
  Error,
} from './FeedbackForm.styled';

export default function FeedbackForm() {
  const [submittedText, setSubmittedText] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = async (values, { resetForm }) => {
    await dispatch(sendFeedback(values));
    console.log(values);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={FeedbackFormValidation}
    >
      {({ values, handleChange, handleBlur, isSubmitting }) => (
        <FormContainer>
          <FormTitle>Reach out to us!</FormTitle>

          <Form
            style={{
              marginTop: '50px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <InputContainer>
              <Icon id={'#name'} />
              <Input
                placeholder="Your name*"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Error>
                <ErrorMessage name={'name'} />
              </Error>
            </InputContainer>

            <InputContainer>
              <Icon id={'#email'} />
              <Input
                placeholder="Your e-mail*"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Error>
                <ErrorMessage name={'email'} />
              </Error>
            </InputContainer>
            <TextareaContainer>
              <Textarea
                placeholder="Your message*"
                id="textarea"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></Textarea>
              <TextareaErrorWrapper>
                <Error>
                  <ErrorMessage name={'message'} />
                </Error>
              </TextareaErrorWrapper>
            </TextareaContainer>

            <Btn type="submit" disabled={isSubmitting}>
              <BtnTitle>
                {error
                  ? 'Oops! Something went wrong. Please, try again.'
                  : isSubmitting
                  ? 'Loading...'
                  : submittedText
                  ? 'Submitted, thanks!'
                  : 'Send message'}
              </BtnTitle>
            </Btn>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
}
