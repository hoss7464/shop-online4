import styled from "styled-components";
import { colors } from "../../core-ui/Theme";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";


export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const RegisterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.background};
  border-radius: 16px;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 0.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    padding: 1rem;
  }

  @media only screen and (min-width: 1921px) {
    padding: 1.5rem;
  }
`;

export const SignupHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
    margin-bottom: 1.5rem;
  }
`;

export const SignupHeader = styled.h1`
  color: ${colors.text1};
  font-weight: 700;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 769px) {
    font-size: 24px;
  }
`;

export const RegisterInputLabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const RegisterLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }

  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;

export const RegisterInputLabel = styled.label`
  color: ${colors.text1};

  font-weight: 400;
  text-transform: capitalize;
  @media only screen and (max-width: 576px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 577px) {
    font-size: 14px;
  }
`;

export const RegisterInputIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 55px;
  background-color: ${colors.background};
  border: solid 3px ${colors.prime1};
  position: relative;
  padding: 0.2rem;
`;

export const RegisterInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyRegisterInput = styled.input`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  background-color: ${colors.background};
  font-size: 16px;
  border-radius: 50px;
  border: none;
  outline: none;
  &:focus {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-size: 12px;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${colors.background} inset !important;
    -webkit-text-fill-color: inherit !important;
  }

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 220px;
    height: 26px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 250px;
    height: 30px;
  }

  @media only screen and (min-width: 769px) {
    width: 330px;
    height: 34px;
  }
`;

export const ShowPassWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: absolute;
right: 0.5rem;

`

export const ShowPassIcon = styled(IoEye)`
color: ${colors.prime1};
width: 24px;
height: 24px;
`
export const HidePassIcon = styled(IoEyeOff)`
color: ${colors.prime1};
width: 24px;
height: 24px;
`

export const RegisterIconWrapper = styled.div`
  justify-content: center;
  align-items: center;
  background-color: ${colors.prime1};
  border-radius: 50%;
  margin-right: 0.5rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  @media only screen and (min-width: 769px) {
    display: flex;
    padding: 0.5rem;
  }
`;

export const RegisterIcon1 = styled(FaUser)`
  width: 18px;
  height: 18px;
  @media only screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const RegisterIcon2 = styled(MdEmail)`
  width: 18px;
  height: 18px;
  @media only screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const RegisterIcon3 = styled(FaPhoneAlt)`
  width: 18px;
  height: 18px;
  @media only screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const RegisterIcon4 = styled(RiLockPasswordFill)`
  width: 18px;
  height: 18px;
  @media only screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const RegisterIcon5 = styled(MdOutlineSecurity)`
  width: 18px;
  height: 18px;
  @media only screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const RegisterSubmitBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const RegisterSubmitButton = styled.button`
  padding: 10px 26px;
  background-color: ${colors.sec1};

  color: ${colors.prime1};
  font-weight: 400;

  border: none;
  outline: none;
  cursor: pointer;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    font-size: 14px;
    border-radius: 55px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    border-radius: 55px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 16px;
    border-radius: 8px;
  }
`;

export const RegisterQuestionWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
    font-size: 12px;
  }
  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
    font-size: 14px;
  }
`;

export const RegiterLink = styled(Link)`
  color: ${colors.sec1};

  margin-left: 0.2rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 14px;
  }
`;

export const RegisterErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 0.3rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }

  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;

export const RegisterError = styled.p`
  font-size: 12px;
  color: red;
`;




