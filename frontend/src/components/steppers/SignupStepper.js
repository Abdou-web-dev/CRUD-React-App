import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Modal } from "antd";
import * as React from "react";
import closeIcon from "../../assets/img/closeIcon.svg";
import infoIcon from "../../assets/img/infoIcon.svg";
import chevron_left from "../../assets/img/register_icons/chevron_left.png";
import chevron_right from "../../assets/img/register_icons/chevron_right.png";
import revenir from "../../assets/img/register_icons/revenir.png";

import emailIcon from "../../assets/img/register_icons/emailIcon.png";
import genderIcon from "../../assets/img/register_icons/genderIcon.png";
import id_cardIcon from "../../assets/img/register_icons/id_cardIcon.png";
import keyIcon from "../../assets/img/register_icons/keyIcon.png";
import planetIcon from "../../assets/img/register_icons/planetIcon.png";

import "./mobile_stepper_styles.scss";

export function TextMobileStepper({
  EmailInput,
  FullNameInput,
  GenderInput,
  CountryInput,
  PasswordInput,
  handleSubmit,
  gender,
  error,
  email,
  password,
  country,
  fullName,
  setGender,
  setEmail,
  setPassword,
  setCountry,
  setFullName,
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [nextdisabled, setnextdisabled] = React.useState(false);
  const [openModal, setopenModal] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const steps = [
    {
      label: "Email",
      description: <>{EmailInput}</>,
    },
    {
      label: "Full Name",
      description: <>{FullNameInput}</>,
    },
    {
      label: "Gender",
      description: <>{GenderInput}</>,
    },
    {
      label: "Country",
      description: <>{CountryInput}</>,
    },
    {
      label: "Password",
      description: <>{PasswordInput}</>,
    },
  ];
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepOne = () => {
    setActiveStep(0);
  };
  const handleSignUp = () => {
    if (!gender || !email || !password || !country || !fullName) {
      return;
    } else {
      setloading(true);
      setTimeout(() => {
        handleSubmit();
      }, 2000);
    }
  };
  const handleResetFields = () => {
    setGender("");
    setEmail("");
    setPassword("");
    setCountry("");
    setFullName("");
  };

  React.useEffect(() => {
    if (activeStep === maxSteps - 1) {
      setnextdisabled(true);
    } else {
      setnextdisabled(false);
    }
    if (error) {
      setloading(false);
    }
  }, [activeStep, error]);

  let lastStep = maxSteps - 1; //boolean
  return (
    <Box className="stepper-box-wrapper" sx={{ maxWidth: 400, flexGrow: 1 }}>
      {error !==
        `Password must include one lowercase character, one uppercase character, a number, and a special character and have a minimum length of 8 characters` && (
        <div className="stepper-error-wrapper">
          <span className="error-text">{error}</span>
        </div>
      )}
      {error ===
        `Password must include one lowercase character, one uppercase character, a number, and a special character and have a minimum length of 8 characters` && (
        <div className="stepper-error-wrapper">
          <span className="error-text">The password is weak</span>
          <Button
            onClick={() => setopenModal(true)}
            className="stepper-error-btn-wrapper"
          >
            <img src={infoIcon} alt="" />
          </Button>
        </div>
      )}
      <Paper
        className={
          activeStep === 3 || activeStep === 2
            ? "the-stepper-paper country-pap"
            : "the-stepper-paper"
        }
        // square
        elevation={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          bgcolor: "gray",
          border: "1px solid lightgray",
        }}
      >
        <div className="the-stepper-paper-inner">
          <Typography
            sx={{
              color: "white",
              fontSize: "25px",
            }}
            className="the-stepper-paper-typo"
          >
            <img
              className="the-stepper-paper-icon"
              src={
                activeStep === 0
                  ? emailIcon
                  : activeStep === 1
                  ? id_cardIcon
                  : activeStep === 2
                  ? genderIcon
                  : activeStep === 3
                  ? planetIcon
                  : activeStep === lastStep
                  ? keyIcon
                  : null
              }
              alt=""
            />

            {steps[activeStep].label}
          </Typography>
        </div>
      </Paper>
      <Box
        className="the-stepper-box"
        sx={{ height: 150, maxWidth: 400, width: "100%", p: 2 }}
      >
        <div className="active-step-description">
          {steps[activeStep].description}
        </div>
      </Box>
      <MobileStepper
        className="the-stepper-container"
        variant="progress"
        steps={maxSteps} // The total steps number
        position="bottom"
        activeStep={activeStep}
        nextButton={
          <Button
            className="mobile-stepper-next-btn"
            size="small"
            onClick={handleNext}
            disabled={nextdisabled}
            style={{
              cursor: nextdisabled ? "not-allowed" : "",
            }}
          >
            <img src={chevron_right} alt="" />
          </Button>
        }
        backButton={
          <>
            <Button
              className="mobile-stepper-back-btn"
              style={{
                cursor: activeStep === 0 ? "not-allowed" : "",
              }}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <img src={chevron_left} alt="" />
            </Button>
          </>
        }
      />
      {/* submit btn */}
      {activeStep === lastStep && (
        <div className="mobile-stepper-signup-btn-wrapper">
          {/* reset btn */}
          <Button
            className="mobile-stepper-reset-btn"
            onClick={handleResetFields}
            size="middle"
            disabled={!gender && !email && !password && !country && !fullName}
          >
            <span>Reset</span>
          </Button>

          {/* signup btn */}
          <Button
            className="mobile-stepper-signup-btn"
            onClick={handleSignUp}
            size="large"
            disabled={!gender || !email || !password || !country || !fullName}
            loading={loading}
          >
            <span>sign up</span>
          </Button>
        </div>
      )}
      {/* back to step one btn */}
      {activeStep === lastStep && (
        <div>
          <Button
            className="mobile-stepper-step-one-btn"
            style={{
              cursor: activeStep === 0 ? "not-allowed" : "",
            }}
            onClick={handleStepOne}
            size="small"
            disabled={activeStep === 0}
          >
            <img src={revenir} alt="" />
          </Button>
        </div>
      )}
      <div className="signup-stepper-progress-dots">{/* progress */}</div>
      <div className="designed-sentence-wrapper">
        <span className="designed-sentence">
          2023, designed by Abdelmounim SIFELHAK.
        </span>
      </div>
      <div>
        <Modal
          className="weak-password-modal"
          open={openModal}
          maskClosable={true}
          closable={false}
          keyboard={true}
          mask={true}
          width={`90%`}
          footer={null}
          title={null}
        >
          <div className="weak-password-modal-text-wrapper">
            <Button
              onClick={() => setopenModal(false)}
              className="weak-password-modal-close-btn"
            >
              <img src={closeIcon} alt="" />
            </Button>
            <span className="weak-password-modal-text">
              Password must include one lowercase character
              <span className="weak-lower"> "a"</span> , one uppercase character
              <span className="weak-upper"> "Z"</span> , a number
              <span className="weak-number"> "4"</span>, and a special character
              <span className="weak-special"> "+"</span> and have a minimum
              length of 8 characters
            </span>
          </div>
        </Modal>
      </div>
    </Box>
  );
}
