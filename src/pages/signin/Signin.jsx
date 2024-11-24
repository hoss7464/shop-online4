import React from "react";
import { SigninContainer, SigninWrapper } from "./SigninElements";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, resetSigninForm } from "../../redux/actions/form/changeSlice";
import { validateSigninEmail } from "../../redux/actions/form/emailValidationSlice";
import { validateSigninPassword } from "../../redux/actions/form/passwordValidationSlice";
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
  RegisterIcon4,
  RegisterSubmitBtnWrapper,
  RegisterSubmitButton,
  RegisterQuestionWrapper,
  RegiterLink,
  RegisterErrorWrapper,
  RegisterError,
} from "../signup/SignupElements";
//---------------------------------------------------------------------------------------------------------

const Signin = () => {
  //Selectors :
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.change);
  const emailError = useSelector((state) => state.emailValidation.signinEmailError);
  const passwordError = useSelector((state) => state.passwordValidation.signinPasswordValidation)
  //---------------------------------------------------------------------------------------------------------
  //Email validation : 
  const handleEmailChange = (e) => {
    const value = e.target.value;
    dispatch(handleChange({ formName: "signin", name: "email", value }));
    dispatch(validateSigninEmail(value));
  };
  //--------------------------------------------------------------------------------------------------------
  //Sign in validation : 
  const handleSigninChange = (e) => {
    const value = e.target.value 
    dispatch(handleChange({ formName: "signin", name: "password", value }));
    dispatch(validateSigninPassword(value))
  }
  //---------------------------------------------------------------------------------------------------------
  //Submit function :
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const email = formData.signin.email;
    const password = formData.signin.password;
  
    
    dispatch(validateSigninEmail(email));
    dispatch(validateSigninPassword(password));
  
    
    const isEmailRequired = emailError || email.trim() === "";
    const isPasswordRequired = passwordError || password.trim() === "";
  
    
    if (isEmailRequired || isPasswordRequired) {
      return;
    }
  
    
    const submitData = {
      email,
      password,
    };
  
    console.log(submitData);
  
    
    dispatch(resetSigninForm());
  };
  
  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={handleSubmit}>
              <SignupHeaderWrapper>
                <SignupHeader>Sign In</SignupHeader>
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
                      value={formData.signin.email}
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

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>Password</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon4 />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <MyRegisterInput
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={formData.signin.password}
                      onChange={handleSigninChange}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {passwordError && (
                  <RegisterErrorWrapper>
                    <RegisterError>{passwordError}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterSubmitBtnWrapper>
                <RegisterSubmitButton type="submit">
                  Sign in
                </RegisterSubmitButton>
              </RegisterSubmitBtnWrapper>
              <RegisterQuestionWrapper>
                Don't you have an account?
                <RegiterLink to="/signup">Signup</RegiterLink>
              </RegisterQuestionWrapper>
              <RegisterQuestionWrapper>
                <RegiterLink to="/forgotPassword">
                  Forgot your password?
                </RegiterLink>
              </RegisterQuestionWrapper>
            </RegisterForm>
          </RegisterFormWrapper>
        </SigninWrapper>
      </SigninContainer>
    </>
  );
};

export default Signin;
