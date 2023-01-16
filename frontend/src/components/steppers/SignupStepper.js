import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button } from "antd";
import * as React from "react";
import chevron_left from "../../assets/img/register_icons/chevron_left.png";
import chevron_right from "../../assets/img/register_icons/chevron_right.png";
import revenir from "../../assets/img/register_icons/revenir.png";

import email from "../../assets/img/register_icons/email.png";
import gender from "../../assets/img/register_icons/gender.png";
import id_card from "../../assets/img/register_icons/id_card.png";
import key from "../../assets/img/register_icons/key.png";
import planet from "../../assets/img/register_icons/planet.png";

import "./mobile_stepper_styles.scss";

export function TextMobileStepper({
  EmailInput,
  FullNameInput,
  GenderInput,
  CountryInput,
  PasswordInput,
}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [nextdisabled, setnextdisabled] = React.useState(false);
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
  React.useEffect(() => {
    if (activeStep === maxSteps - 1) {
      setnextdisabled(true);
    } else {
      setnextdisabled(false);
    }
  }, [activeStep]);

  let lastStep = maxSteps - 1; //boolean
  return (
    <Box className="stepper-box-wrapper" sx={{ maxWidth: 400, flexGrow: 1 }}>
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
                  ? email
                  : activeStep === 1
                  ? id_card
                  : activeStep === 2
                  ? gender
                  : activeStep === 3
                  ? planet
                  : activeStep === lastStep
                  ? key
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
        sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}
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
      <div className="designed-sentence">
        <span>2023, designed by Abdelmounim SIFELHAK.</span>
      </div>
    </Box>
  );
}
