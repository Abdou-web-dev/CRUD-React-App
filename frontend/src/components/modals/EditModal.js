import { Button, Modal } from "antd";
import { CloseX } from "../icons/Icons";
import { EditModalContent } from "./EditModalContent";
import "./modals_styles.scss";

export function EditModal({
  showModal,
  setshowModal,
  workout,
  dispatch,
  setUpdatedWorkout,
  updatedWorkout,
  openEditModal,
  setopenEditModal,
  layoutGrid,
}) {
  return (
    <>
      <Modal
        className="ant-edit-modal"
        open={openEditModal}
        maskClosable={true}
        closable={false}
        keyboard={true}
        mask={true}
        onOk={() => setopenEditModal(false)}
        onCancel={() => setopenEditModal(false)}
        width={layoutGrid ? "50%" : "60%"}
        footer={null}
        // title={`Edit this workout`}
        title={
          <>
            <span>Edit this workout</span>
            <Button
              onClick={() => setopenEditModal(false)}
              className="ant-edit-modal-close-btn"
            >
              <CloseX></CloseX>
            </Button>
          </>
        }
      >
        <EditModalContent
          {...{
            showModal,
            setshowModal,
            workout,
            dispatch,
            setUpdatedWorkout,
            updatedWorkout,
          }}
        ></EditModalContent>
      </Modal>
    </>
  );
}

// PUT is a method of modifying resource where the client sends data that updates the entire resource .
// PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.
