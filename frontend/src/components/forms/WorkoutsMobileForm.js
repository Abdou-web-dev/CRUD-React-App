import { Button, Form, Input, Modal } from "antd-mobile";
import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import "./form_styles.scss";

const WorkoutsMobileForm = ({}) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();
  const [showMobileForm, setshowMobileForm] = useState(false);
  const [showMobileFormModal, setShowMobileFormModal] = useState(false);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState(``);
  const [exoCategory, setExoCategory] = useState(``);

  const onFinish = () => {};
  const MobileForm = (
    <Form
      onFinish={onFinish}
      layout="horizontal"
      footer={
        <Button block type="submit" color="primary" size="large">
          <span>ekjfekj</span>
        </Button>
      }
    >
      <Form.Header></Form.Header>
      <Form.Item name="name" label="" rules={[{ required: true, message: "" }]}>
        <Input clearable={true} onChange={console.log} placeholder="" />
      </Form.Item>
    </Form>
  );
  return (
    <div>
      <Button
        block
        onClick={() => {
          Modal.show({
            content: MobileForm,
            closeOnMaskClick: true,
          });
        }}
      >
        <span>Add a new Workout</span>{" "}
      </Button>
    </div>
  );
};

export default WorkoutsMobileForm;
