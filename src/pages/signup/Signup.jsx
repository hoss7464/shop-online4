import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Signup.css";
import { useSelector, useDispatch } from "react-redux";
import { clickToggle } from "../../redux/actions/toggleSlice";
import { validateSignupEmail } from "../../redux/actions/form/emailValidationSlice";
import { validateSignupUsername } from "../../redux/actions/form/usernameValidationSlice";
import { validateSignupPhone } from "../../redux/actions/form/phoneValidationSlice";
import { validateSignupPassword, validateSignupConfirmPassword} from "../../redux/actions/form/passwordValidationSlice";
import {
  handleChange,
  handlePhoneChange,
} from "../../redux/actions/form/changeSlice";
import {
  RegisterContainer,
  RegisterWrapper,
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
  ShowPassWrapper,
  ShowPassIcon,
  HidePassIcon,
  RegisterIconWrapper,
  RegisterIcon1,
  RegisterIcon2,
  RegisterIcon3,
  RegisterIcon4,
  RegisterIcon5,
  RegisterSubmitBtnWrapper,
  RegisterSubmitButton,
  RegisterQuestionWrapper,
  RegiterLink,
  RegisterErrorWrapper,
  RegisterError,
} from "./SignupElements";
import PasswordStrengthBar from "react-password-strength-bar"
//-------------------------------------------------------------------------------------------------------------

const Signup = () => {
  //Selectors :
  const dispatch = useDispatch();
  const toggles = useSelector((state) => state.toggle.toggles);
  const formData = useSelector((state) => state.change);
  const emailError = useSelector((state) => state.emailValidation.signupEmailError);
  const usernameError = useSelector((state) => state.usernameValidation.signupUsernameError);
  const phoneError = useSelector((state) => state.phoneValidation.signupPhoneError);
  const passwordError = useSelector((state) => state.passwordValidation.signupPasswordValidation)
  const confirmPasswordError = useSelector((state) => state.passwordValidation.signupConfirmPasswordValidation)
  //-------------------------------------------------------------------------------------------------------------
  //Email validation :
  const handleEmailChange = (e) => {
    const value = e.target.value;
    dispatch(handleChange({ formName: "signup", name: "email", value }));
    dispatch(validateSignupEmail(value));
  };
  //-------------------------------------------------------------------------------------------------------------
  //Username validation :
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    dispatch(handleChange({ formName: "signup", name: "fullname", value }));
    dispatch(validateSignupUsername(value));
  };
  //-------------------------------------------------------------------------------------------------------------
  //Password & confirm password validation :
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    dispatch(handleChange({ formName: "signup", name: "password", value }));
    dispatch(validateSignupPassword(value));
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    const password = formData.signup.password;
    dispatch(handleChange({ formName: "signup", name: "confirmPassword", value: confirmPassword }));
    dispatch(validateSignupConfirmPassword({ password, confirmPassword }));
  };
  //-------------------------------------------------------------------------------------------------------------
  
  return (
    <>
      <RegisterContainer>
        <RegisterWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={(e) => e.preventDefault()}>
              <SignupHeaderWrapper>
                <SignupHeader>Registration</SignupHeader>
              </SignupHeaderWrapper>
              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>Username</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon1 />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <MyRegisterInput
                      placeholder="Username"
                      type="text"
                      name="fullname"
                      value={formData.signup.fullname}
                      onChange={handleUsernameChange}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {usernameError && (
                  <RegisterErrorWrapper>
                    <RegisterError>{usernameError}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

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
                      value={formData.signup.email}
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
                  <RegisterInputLabel>Phone</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon3 />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <PhoneInput
                      country={"us"}
                      value={formData.phone}
                      containerClass="phone-input-container"
                      onChange={(phone) => {
                        dispatch(handlePhoneChange(phone));
                        dispatch(validateSignupPhone(phone));
                      }}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {phoneError && (
                  <RegisterErrorWrapper>
                    <RegisterError>{phoneError}</RegisterError>
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
                      type={toggles["showHidePass1"] ? "text" : "password"}
                      name="password"
                      value={formData.signup.password}
                      onChange={handlePasswordChange}
                    />
                  </RegisterInputWrapper>
                  <ShowPassWrapper
                    onClick={() => dispatch(clickToggle("showHidePass1"))}
                  >
                    {toggles["showHidePass1"] ? (
                      <ShowPassIcon />
                    ) : (
                      <HidePassIcon />
                    )}
                  </ShowPassWrapper>
                </RegisterInputIconWrapper>
                <PasswordStrengthBar
                  password={formData.signup.password}
                  style={{ height: "8px", width: "90%" }}
                  scoreWords={[]}
                  shortScoreWord=""
                />
                {passwordError && (
                  <RegisterErrorWrapper>
                    <RegisterError>{passwordError}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>Confirm Password</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon5 />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <MyRegisterInput
                      placeholder="Confirm"
                      type="password"
                      name="confirmPassword"
                      value={formData.signup.confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {confirmPasswordError && (
                  <RegisterErrorWrapper>
                    <RegisterError>{confirmPasswordError}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterSubmitBtnWrapper>
                <RegisterSubmitButton type="submit">
                  Submit
                </RegisterSubmitButton>
              </RegisterSubmitBtnWrapper>
              <RegisterQuestionWrapper>
                Already have an account?
                <RegiterLink to="/signin">Signin</RegiterLink>
              </RegisterQuestionWrapper>
            </RegisterForm>
          </RegisterFormWrapper>
        </RegisterWrapper>
      </RegisterContainer>
    </>
  );
};

export default Signup;
