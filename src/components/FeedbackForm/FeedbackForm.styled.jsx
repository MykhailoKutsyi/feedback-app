import styled from 'styled-components';
import { Field } from 'formik';

export const FormContainer = styled.div`
  width: 300px;
  padding: 10px;
  background: #fff;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 533px;
  }
`;
export const FormTitle = styled.div`
  padding-top: 180px;
  padding-left: 150px;
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
`;

export const Input = styled(Field)`
  margin-left: 20px;
  width: 243px;
  height: 30px;
  outline: none;
  border: none;
  ::placeholder {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 373px;
  }
`;

export const Error = styled.p`
  position: absolute;
  font-size: 12px;
  color: red;
  top: -24px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: #fff;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 40px;

  &:hover {
    border-bottom: 1px solid #1a8f75;
  }
`;

export const Textarea = styled.textarea`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 10px;

  width: 280px;
  height: 80px;

  border: none;
  outline: 1px solid #e0e0e0;

  resize: none;

  @media screen and (min-width: 768px) {
    width: 480px;
  }
`;

export const Btn = styled.button`
  width: 280px;
  height: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #fad34f;
  border-radius: 20px;
  border: none;
  @media screen and (min-width: 768px) {
    width: 300px;
  }

  &:disabled {
    background-color: #1a6f75;
  }

  &:hover,
  &:focus {
    background-color: #1a8f75;
  }
`;

export const BtnTitle = styled.span`
  color: #fff; ;
`;
