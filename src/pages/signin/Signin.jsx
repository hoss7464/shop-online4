import React from "react";
import { SigninContainer, SigninWrapper } from "./SigninElements";
import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "../../redux/actions/form/changeSlice";
import { validateSigninEmail } from "../../redux/actions/form/emailValidationSlice";
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
  //---------------------------------------------------------------------------------------------------------
  //Email validation : 
  const handleEmailChange = (e) => {
    const value = e.target.value;
    dispatch(handleChange({ formName: "signin", name: "email", value }));
    dispatch(validateSigninEmail(value));
  };
  //---------------------------------------------------------------------------------------------------------
  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={(e) => e.preventDefault()}>
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
                      onChange={(e) =>
                        dispatch(
                          handleChange({
                            formName: "signin",
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
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
