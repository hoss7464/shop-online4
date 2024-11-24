import React from "react";
import { SigninContainer, SigninWrapper } from "../signin/SigninElements";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, resetForgotPsswordForm } from "../../redux/actions/form/changeSlice";
import { validateForgotPasswordEmail } from "../../redux/actions/form/emailValidationSlice";
import {
  RegisterFormWrapper,
  RegisterForm,
  SignupHeaderWrapper,
  SignupHeader,
  RegisterInputLabelWrapper,
  RegisterLabelWrapper,
  RegisterInputLabel,
  RegisterInputIconWrapper,
  RegisterInputWrapper,
  MyRegisterInput,
  RegisterIconWrapper,
  RegisterIcon2,
  RegisterSubmitBtnWrapper,
  RegisterSubmitButton,
  RegisterErrorWrapper,
  RegisterError,
} from "../signup/SignupElements";
//-------------------------------------------------------------------------------------------------

const ForgotPassword = () => {
  //Selectors : 
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.change);
  const emailError = useSelector((state) => state.emailValidation.forgotPasswordEmailError);
  //-------------------------------------------------------------------------------------------------
  //Email validation : 
  const handleEmailChange = (e) => {
    const value = e.target.value;
    dispatch(handleChange({ formName: "forgotPassword", name: "email", value }));
    dispatch(validateForgotPasswordEmail(value));
  };
  //-------------------------------------------------------------------------------------------------
  //Submit function : 
  const handleSubmit = (e) => {
    e.preventDefault()

    const email = formData.forgotPassword.email;
    dispatch(validateForgotPasswordEmail(email))
    const isEmailRequired = emailError || email.trim() === ""

    if (isEmailRequired) {
      return
    }

    const submitData = {
      email 
    }

    console.log(submitData)

    dispatch(resetForgotPsswordForm())
  }
  
  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={handleSubmit}>
              <SignupHeaderWrapper>
                <SignupHeader>Forgot Password</SignupHeader>
              </SignupHeaderWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>Email</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon2 />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <MyRegisterInput
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={formData.forgotPassword.email}
                      onChange={handleEmailChange}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {emailError && (
                  <RegisterErrorWrapper>
                    <RegisterError>{emailError}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterSubmitBtnWrapper>
                <RegisterSubmitButton type="submit">Send</RegisterSubmitButton>
              </RegisterSubmitBtnWrapper>
            </RegisterForm>
          </RegisterFormWrapper>
        </SigninWrapper>
      </SigninContainer>
    </>
  );
};

export default ForgotPassword;
