import { Divider, Steps } from "antd";
import React, { useState } from "react";
import { WorkoutInfosDrawer } from "../drawer_content/WorkoutInfosDrawer";
import { InfosvgIcon, RateIcon, VideoPlayer } from "../icons/Icons";
import { RateWorkout } from "../rating/RateWorkout";
import { ChestVideoWorkouts } from "../video_components/ChestVideoWorkouts";
import "./steps_styles.scss";
const { Step } = Steps;

export const Stepper = ({ workoutTitle }) => {
  function videoUrl(url) {
    let videoUrl =
      workoutTitle === "Barbell Flat Bench Press"
        ? { url: "https://www.youtube.com/watch?v=rT7DgCr-3pg" }
        : "";
    return videoUrl.url;
  }
  const steps = [
    {
      title: "",
      content: <WorkoutInfosDrawer workoutTitle={workoutTitle} />,
    },
    {
      title: "",
      content: <ChestVideoWorkouts videoUrl={videoUrl()} />,
    },
    {
      title: "",
      content: <RateWorkout />,
    },
  ];
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const onChange = (value) => {
    setCurrent(value);
  };
  const [infosStep, setinfosStep] = useState(false);
  const [rateStep, setrateStep] = useState(false);
  const [videoStep, setvideoStep] = useState(false);

  let infosIcon = (
    <div
      onMouseOver={() => setinfosStep(true)}
      onMouseLeave={() => setinfosStep(!infosStep)}
    >
      <InfosvgIcon />
    </div>
  );
  let VideoPlayerIcon = (
    <div
      onMouseOver={() => setvideoStep(true)}
      onMouseLeave={() => setvideoStep(!videoStep)}
    >
      <VideoPlayer />
    </div>
  );
  let RateIconWrapper = (
    <div
      onMouseOver={() => setrateStep(true)}
      // onMouseLeave={() => setrateStep(false)}
    >
      <RateIcon />
    </div>
  );
  return (
    <div className={"stepper-container"}>
      <Steps current={current} onChange={onChange}>
        <Step
          subTitle={infosStep === true ? `Informations` : null}
          icon={infosIcon}
          title={steps[0].title}
        />
        <Step
          subTitle={videoStep === true ? `Preview` : null}
          icon={VideoPlayerIcon}
          title={steps[1].title}
        />
        <Step
          // onClick={() => console.log("tttttt")}
          subTitle={rateStep === true ? `Rate it` : null}
          icon={RateIconWrapper}
          title={steps[2].title}
        />
      </Steps>

      <div className="steps-content">
        <Divider
          style={{ border: "0.5px solid lightgray" }}
          type="horizontal"
        />
        {steps[current].content}
        <div style={{ display: "inline-block" }}></div>
      </div>
      {/* <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div> */}
    </div>
  );
};
