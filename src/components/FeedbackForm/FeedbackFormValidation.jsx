import * as Yup from 'yup';

function FeedbackFormValidation() {
  const validate = Yup.object({
    name: Yup.string().min(2).max(16).required('Type your name'),
    email: Yup.string()
      .email('Email is invalid')
      .min(8)
      .max(63)
      .required('Email is required')
      .test({
        message: 'Before @ at least 2 characters',
        test: value => value && value[0] && value[1] !== '@',
      })
      .test({
        message: 'Do not type dash at the start ',
        test: value => value && value[0] !== '-',
      })
      .matches(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}/, 'Email is invalid'),
    message: Yup.string()
      .min(2)
      .max(500)
      .required('Type your feedback, please'),
  });
  return validate;
}

export default FeedbackFormValidation;
