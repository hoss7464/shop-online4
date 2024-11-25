import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clickToggle } from "../../redux/actions/toggleSlice";
import {handleChange,resetRetievePasswordForm} from "../../redux/actions/form/changeSlice";
import { SigninContainer, SigninWrapper } from "../signin/SigninElements";
import {validateRetrievePassword,validateRetrieveConfirmPassword} from "../../redux/actions/form/passwordValidationSlice";
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
  RegisterError,
} from "../signup/SignupElements";
import PasswordStrengthBar from "react-password-strength-bar";
import { useParams, useNavigate } from "react-router-dom";
import useUpdateData from "../../hook/useUpdateData";
//-------------------------------------------------------------------------------------------------------------------

const RetrievePassword = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { updateData } = useUpdateData(`http://localhost:5000/posts/${userId}`);
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
  //submit function :
  const handleSubmit = async (e) => {
    e.preventDefault();
    //To get retrieve password states :
    const password = formData.retrievePassword.password;
    const confirmPassword = formData.retrievePassword.confirmPassword;
    //To validate each input on change :
    dispatch(validateRetrievePassword(password));
    dispatch(validateRetrieveConfirmPassword(confirmPassword));
    //To get input errors :
    const isPasswordRequired = passwordError || password.trim() === "";
    const isConfirmPasswordRequired =confirmPasswordError || confirmPassword.trim() === "";
    //To show input errors at the time of submiting incorrect data :
    if (isPasswordRequired || isConfirmPasswordRequired) {
      return;
    }
    //Submited data :
    const submitData = {
      password,
      confirmPassword,
    };
    //To send PATCH request to update data on server : 
    try {
      await updateData(submitData);
      dispatch(resetRetievePasswordForm());
      navigate("/signin");
    } catch (err) {
      alert("Error updating password:", err.message);
    }
    //to erase inputs after submiting : 
    dispatch(resetRetievePasswordForm());
  };

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={handleSubmit}>
              <SignupHeaderWrapper>
                <SignupHeader>Retrieve Password</SignupHeader>
              </SignupHeaderWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel htmlFor="new password" >New Password</RegisterInputLabel>
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
                  <RegisterInputLabel htmlFor="confirm password">Confirm Password</RegisterInputLabel>
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
