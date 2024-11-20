import React from "react";
import { SigninContainer, SigninWrapper } from "../signin/SigninElements";
import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "../../redux/actions/form/changeSlice";
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

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.change);
  const emailError = useSelector(
    (state) => state.emailValidation.forgotPasswordEmailError
  );

  const handleEmailChange = (e) => {
    const value = e.target.value;
    dispatch(handleChange({ formName: "forgotPassword", name: "email", value }));
    dispatch(validateForgotPasswordEmail(value));
  };
  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={(e) => e.preventDefault()}>
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
