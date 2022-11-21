import { Divider, Steps } from "antd";
import React, { useState } from "react";
import { WorkoutInfosDrawer } from "../drawer_content/WorkoutInfosDrawer";
import { InfosvgIcon, RateIcon, VideoPlayer } from "../icons/Icons";
import { RateWorkout } from "../rating/RateWorkout";
import { ChestVideoWorkouts } from "../video_components/ChestVideoWorkouts";
import "./steps_styles.scss";
const { Step } = Steps;

export const Stepper = ({
  workoutTitle,
  setOpenInfosDrawer,
  setbg,
  setdetailsContClass,
  setcontainerClass,
}) => {
  function videoUrl() {
    let videoUrl =
      workoutTitle === "Barbell Flat Bench Press"
        ? "https://www.youtube.com/watch?v=rT7DgCr-3pg" //src="https://www.youtube.com/embed/UDVZg_bd4zM" if iframe tag used
        : workoutTitle === "Barbell Incline Bench Press"
        ? "https://www.youtube.com/watch?v=SrqOu55lrYU"
        : workoutTitle === "Barbell Decline Bench Press"
        ? `https://www.youtube.com/watch?v=LfyQBUKR8SE`
        : workoutTitle === "Chest Flye"
        ? `https://www.youtube.com/watch?v=eozdVDA78K0`
        : workoutTitle === "Dumbbell Bench Press"
        ? `https://www.youtube.com/watch?v=VmB1G1K7v94`
        : workoutTitle === "Push-Up"
        ? `https://www.youtube.com/watch?v=IODxDxX7oi4`
        : workoutTitle === "Dip"
        ? `https://www.youtube.com/watch?v=53KM-mmJhic`
        : workoutTitle === "Svend Press"
        ? `https://www.youtube.com/watch?v=cIoUZOnypS8`
        : workoutTitle === "Cable Iron Cross"
        ? `https://www.youtube.com/watch?v=V1IYJGYj0YM`
        : workoutTitle === "Chaos Push-Up"
        ? `https://www.youtube.com/watch?v=Df4Jsk1ayk8`
        : workoutTitle === "Plyo Push-Up"
        ? `https://www.youtube.com/watch?v=QlsBDcMK9EY`
        : workoutTitle === "Dumbbell Floor Press"
        ? `https://www.youtube.com/watch?v=uUGDRwge4F8`
        : workoutTitle === "Pause Push-Up"
        ? `https://www.muscleandstrength.com/exercises/paused-push-up`
        : workoutTitle === "Side-to-Side Landmine Press"
        ? `https://www.youtube.com/watch?v=MQ1BFTA2hRI`
        : workoutTitle === "Close-Grip Push-Up"
        ? `https://www.youtube.com/watch?v=G2mlaEfpEIM`
        : "";
    return videoUrl;
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
      content: (
        <RateWorkout
          {...{
            setOpenInfosDrawer,
            workoutTitle,
            setbg,
            setdetailsContClass,
            setcontainerClass,
          }}
        />
      ),
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
      onMouseLeave={() =>
        setTimeout(() => {
          setrateStep(false);
        }, 1000)
      }
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
