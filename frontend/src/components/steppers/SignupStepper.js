import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button } from "antd";
import * as React from "react";
import ChestIcon from "../../assets/img/firstStep.svg";
import goback from "../../assets/img/goback.png";
import next from "../../assets/img/next.png";
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
        // square
        elevation={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          bgcolor: "gray",
          border: "1px solid lightgray",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "25px",
          }}
        >
          {steps[activeStep].label}
        </Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
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
            <img src={next} alt="" />
          </Button>
        }
        backButton={
          <>
            {activeStep === lastStep ? (
              <>
                <Button
                  className="mobile-stepper-back-btn"
                  style={{
                    cursor: activeStep === 0 ? "not-allowed" : "",
                  }}
                  size="small"
                  // onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  <img src={ChestIcon} alt="" />
                </Button>
                <Button
                  className="mobile-stepper-back-btn"
                  style={{
                    cursor: activeStep === 0 ? "not-allowed" : "",
                  }}
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  <img src={goback} alt="" />
                </Button>
              </>
            ) : (
              <Button
                className="mobile-stepper-back-btn"
                style={{
                  cursor: activeStep === 0 ? "not-allowed" : "",
                }}
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <img src={goback} alt="" />
              </Button>
            )}
          </>
        }
      />
      <div>
        <span>2023, designed by Abdelmounim SIFELHAK.</span>
      </div>
    </Box>
  );
}
