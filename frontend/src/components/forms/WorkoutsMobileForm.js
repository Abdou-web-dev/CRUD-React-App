import { Alert, Select } from "antd";
import { Button, Form, Input, Modal } from "antd-mobile";
import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { ClearIcon } from "../icons/Icons";

const WorkoutsMobileForm = () => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(0);
  const [reps, setReps] = useState(0);
  const [title, setTitle] = useState("");
  const [exoCategory, setExoCategory] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // const workoutsTitlesArray = [
  //   ...new Set(workouts?.map((workout) => workout.title)),
  // ];
  const handleSubmit = async () => {
    if (!user) {
      return;
    }
    //quit the function at this point, if no user is authenticated and logged in, because only logged in users can add workouts or delete them...

    const workout = { title, load, reps, exoCategory };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log(workout);
      console.log(title, exoCategory, reps, load);
    }
    if (response.ok) {
      setError(null);
      setExoCategory(``);
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      // if (showNotification === true) {
      //   setShowNotification(false);
      // }
    }
  };

  const MobileForm = (
    <Form onFinish={handleSubmit} layout="horizontal" footer={null}>
      <Form.Header>Workout Category :</Form.Header>
      <Form.Item
        name="exo-categ"
        label=""
        rules={[{ required: true, message: "" }]}
      >
        <Select
          className={"form-select-exo-categ"}
          value={exoCategory}
          onChange={(value) => {
            setExoCategory(value);
          }}
          style={{ width: "200px" }}
          size={"large"}
          filterOption={(input, option) =>
            (option?.value ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.value ?? "")
              .toLowerCase()
              .localeCompare((optionB?.value ?? "").toLowerCase())
          }
          options={[
            { value: "Chest" },
            { value: "Triceps" },
            { value: "Trapezius" },
            { value: "Shoulders" },
            { value: "Hamstrings" },
            { value: "Forearms" },
            { value: "Calves" },
            { value: "Biceps" },
            { value: "Back" },
            { value: "Abs" },
          ]}
          // status={null}
        />
      </Form.Item>

      <Form.Header>Workout title :</Form.Header>
      <Form.Item
        name="exo-title"
        label=""
        rules={[{ required: true, message: "" }]}
      >
        <Input
          className="form-input-load-component"
          value={title}
          onChange={(e) => (title ? setTitle(e.target.value) : null)}
          type="text"
          placeholder={null}
          clearable={true}
        />
      </Form.Item>

      <Form.Header>Workout Load :</Form.Header>
      <Form.Item
        name="exo-load"
        label=""
        rules={[{ required: true, message: "" }]}
      >
        <Input
          className="form-input-load-component"
          type="number"
          value={load}
          onChange={(e) => (load ? setLoad(e.target.value) : null)}
          status={null}
          placeholder={null}
          prefix={null}
          clearable={true}
        />
      </Form.Item>

      <Form.Header>Workout Repetitions :</Form.Header>
      <Form.Item
        name="exo-reps"
        label=""
        rules={[{ required: true, message: "" }]}
      >
        <Input
          className="form-input-reps-component"
          type="number"
          value={reps}
          onChange={(e) => (reps ? setReps(e.target.value) : null)}
          placeholder={null}
          clearable={true}
        />
      </Form.Item>

      <Button block type="submit" color="primary" size="large">
        <span>Submit</span>
      </Button>
    </Form>
  );
  return (
    <div>
      <>
        {/* JSX to show a notification if the user tries to enter a workout that already exists */}
        {showNotification && (
          <div className="notification">
            <Alert
              className="ant-alert"
              closeIcon={
                <Button onClick={() => setShowNotification(false)}>
                  <ClearIcon />
                </Button>
              }
              message={
                <span className="noti-text">This workout already exists !</span>
              }
              banner
              closable
            />
          </div>
        )}
      </>
      <Button
        block
        onClick={() => {
          Modal.show({
            content: MobileForm,
            closeOnMaskClick: true,
          });
        }}
      >
        <span>Add a new Workout</span>
      </Button>
      <div className="error-msg-container">
        {error && (
          <div className={"error-msg-modalform-msg-error"}>{error}</div>
        )}
      </div>
    </div>
  );
};

export default WorkoutsMobileForm;
