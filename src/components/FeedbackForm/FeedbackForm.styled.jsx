import styled from 'styled-components';
import { Field } from 'formik';

export const FormContainer = styled.div`
  width: 350px;
  margin-top: 180px;
  padding: 10px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 557px;
  }
`;
export const FormTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
`;

export const InputContainer = styled.div`
  position: relative;
  /* margin-top: 40px; */
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  height: 75px;
  padding-left: 15px;
  /* border: #fff; */
  /* border-bottom: 1px solid #e0e0e0; */
  border: 1px solid #dcdcdc;
  border-radius: 10px;

  &:hover,
  &:focus {
    border: 2px solid #f1bb08;
  }
`;

export const Input = styled(Field)`
  margin-left: 20px;
  width: 243px;
  height: 30px;
  outline: none;
  border: none;
  ::placeholder {
    font-size: 18px;
    line-height: 32px;
    color: #2d2d2d;
  }
  @media screen and (min-width: 768px) {
    width: 373px;
  }
`;

export const Error = styled.p`
  position: absolute;
  font-size: 12px;
  color: red;
  top: -20px;
`;

export const TextareaContainer = styled.div`
  position: relative;
`;

export const TextareaErrorWrapper = styled.div`
  margin-left: 15px;
`;

export const Textarea = styled.textarea`
  margin-top: 8px;
  padding: 31px 41px;

  width: 328px;
  height: 190px;

  border: none;
  outline: 1px solid #e0e0e0;

  resize: none;

  @media screen and (min-width: 768px) {
    width: 538px;
  }
  &:hover,
  &:focus {
    border: 2px solid #f1bb08;
  }
`;

export const Btn = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 23px;
  background-color: #fad34f;
  border-radius: 20px;
  border: none;

  @media screen and (min-width: 768px) {
    width: 218px;
    height: 73px;
  }

  &:hover,
  &:focus,
  &:disabled {
    background-color: #dfb015;
  }
`;

export const BtnTitle = styled.span`
  font-size: 18px;
  line-height: 18px;
  color: #fff; ;
`;
