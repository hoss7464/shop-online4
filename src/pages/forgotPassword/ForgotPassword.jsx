import React from "react";
import { SigninContainer, SigninWrapper } from "../signin/SigninElements";
import { useSelector, useDispatch } from "react-redux";
import {
  handleChange,
  resetForgotPsswordForm,
} from "../../redux/actions/form/changeSlice";
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
import useGetData from "../../hook/useGetData";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../core-ui/ScrollToTop";
//-------------------------------------------------------------------------------------------------

const ForgotPassword = () => {
  const { getData } = useGetData("http://localhost:5000/posts");
  const navigate = useNavigate();
  //Selectors :
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.change);
  const emailError = useSelector(
    (state) => state.emailValidation.forgotPasswordEmailError
  );
  //-------------------------------------------------------------------------------------------------
  //Email validation :
  const handleEmailChange = (e) => {
    const value = e.target.value;
    dispatch(
      handleChange({ formName: "forgotPassword", name: "email", value })
    );
    dispatch(validateForgotPasswordEmail(value));
  };
  //-------------------------------------------------------------------------------------------------
  //Submit function :
  const handleSubmit = async (e) => {
    e.preventDefault();
    //To get forgot password states :
    const email = formData.forgotPassword.email;
    //To validate each input on change :
    dispatch(validateForgotPasswordEmail(email));
    //To get input errors :
    const isEmailRequired = emailError || email.trim() === "";
    //To show input errors at the time of submiting incorrect data :
    if (isEmailRequired) {
      return;
    }
    //To send GET request to server :
    try {
      const fetchedData = await getData("http://localhost:5000/posts");
      //To find correct data on server :
      const user = fetchedData.find((user) => user.email === email);
      if (user) {
        navigate(`/retrievePassword/${user.id}`);
      } else {
        alert("Invalid email");
      }
    } catch (err) {
      alert(`Unable to fetch data: ${err.message}`);
    }
    //To erase input after submiting :
    dispatch(resetForgotPsswordForm());
  };

  return (
    <>
      <ScrollToTop />
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
