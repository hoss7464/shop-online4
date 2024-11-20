import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clickToggle } from "../../redux/actions/toggleSlice";
import { handleChange } from "../../redux/actions/form/changeSlice";
import { SigninContainer, SigninWrapper } from "../signin/SigninElements";
import {
  validateRetrievePassword,
  validateRetrieveConfirmPassword,
} from "../../redux/actions/form/passwordValidationSlice";
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
  ShowPassWrapper,
  ShowPassIcon,
  HidePassIcon,
  RegisterIconWrapper,
  RegisterIcon4,
  RegisterIcon5,
  RegisterSubmitBtnWrapper,
  RegisterSubmitButton,
  RegisterErrorWrapper,
  RegisterError
} from "../signup/SignupElements";
import PasswordStrengthBar from "react-password-strength-bar";
//-------------------------------------------------------------------------------------------------------------------

const RetrievePassword = () => {
  //Selectors : 
  const dispatch = useDispatch();
  const toggles = useSelector((state) => state.toggle.toggles);
  const formData = useSelector((state) => state.change);
  const passwordError = useSelector((state) => state.passwordValidation.retrievePasswordValidation);
  const confirmPasswordError = useSelector((state) => state.passwordValidation.retrieveConfirmPasswordValidation);
  //-------------------------------------------------------------------------------------------------------------------
  //Passwor and confirm password validation : 
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    dispatch(handleChange({ formName: "retrievePassword", name: "password", value }));
    dispatch(validateRetrievePassword(value));
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    const password = formData.retrievePassword.password;
    dispatch(handleChange({formName: "retrievePassword",name: "confirmPassword",value: confirmPassword,}));
    dispatch(validateRetrieveConfirmPassword({ password, confirmPassword }));
  };
  //-------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={(e) => e.preventDefault()}>
              <SignupHeaderWrapper>
                <SignupHeader>Retrieve Password</SignupHeader>
              </SignupHeaderWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>New Password</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon4 />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <MyRegisterInput
                      placeholder="Password"
                      type={toggles["showHidePass2"] ? "text" : "password"}
                      name="password"
                      value={formData.retrievePassword.password}
                      onChange={handlePasswordChange}
                    />
                  </RegisterInputWrapper>
                  <ShowPassWrapper
                    onClick={() => dispatch(clickToggle("showHidePass2"))}
                  >
                    {toggles["showHidePass2"] ? (
                      <ShowPassIcon />
                    ) : (
                      <HidePassIcon />
                    )}
                  </ShowPassWrapper>
                </RegisterInputIconWrapper>
                <PasswordStrengthBar
                  password={formData.retrievePassword.password}
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
                      value={formData.retrievePassword.confirmPassword}
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
                  Change
                </RegisterSubmitButton>
              </RegisterSubmitBtnWrapper>
            </RegisterForm>
          </RegisterFormWrapper>
        </SigninWrapper>
      </SigninContainer>
    </>
  );
};

export default RetrievePassword;
