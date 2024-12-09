import React from "react";
import { SigninContainer, SigninWrapper } from "./SigninElements";
import { useSelector, useDispatch } from "react-redux";
import {handleChange,resetSigninForm} from "../../redux/actions/form/changeSlice";
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
import useGetData from "../../hook/useGetData";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../core-ui/ScrollToTop"
//---------------------------------------------------------------------------------------------------------

const Signin = () => {
  const { getData } = useGetData();
  const navigate = useNavigate();
  //Selectors :
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.change);
  const emailError = useSelector((state) => state.emailValidation.signinEmailError);
  const passwordError = useSelector((state) => state.passwordValidation.signinPasswordValidation);
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
    const value = e.target.value;
    dispatch(handleChange({ formName: "signin", name: "password", value }));
    dispatch(validateSigninPassword(value));
  };
  //---------------------------------------------------------------------------------------------------------
  //Submit function :
  const handleSubmit = async (e) => {
    e.preventDefault();
    //To get sign in states :
    const email = formData.signin.email;
    const password = formData.signin.password;
    //To validate each input on change :
    dispatch(validateSigninEmail(email));
    dispatch(validateSigninPassword(password));
    //To get input errors :
    const isEmailRequired = emailError || email.trim() === "";
    const isPasswordRequired = passwordError || password.trim() === "";
    //To show input errors at the time of submiting incorrect data :
    if (isEmailRequired || isPasswordRequired) {
      return;
    }
    //To send GET request to server :
    try {
      const fetchedData = await getData("http://localhost:5000/posts");
      //To find correct data on server :
      const user = fetchedData.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        navigate("/dashboard"); 
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      alert(`Unable to fetch data: ${err.message}`);
    } finally {
      //To erase inputs after submiting data : 
      dispatch(resetSigninForm());
    }
  };

  return (
    <>
      <ScrollToTop />
      <SigninContainer>
        <SigninWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={handleSubmit}>
              <SignupHeaderWrapper>
                <SignupHeader>Sign In</SignupHeader>
              </SignupHeaderWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel htmlFor="email" >Email</RegisterInputLabel>
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
                  <RegisterInputLabel htmlFor="email" >Password</RegisterInputLabel>
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
