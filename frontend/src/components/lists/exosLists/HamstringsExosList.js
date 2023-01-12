import { Stack } from "@mui/system";
import { Button, Modal } from "antd";
import { useState } from "react";
import { HamstringsModalContent } from "../../../components/modals/HamstringsModalContent";
import "./exos_lists.scss";

export function HamstringsExosList({ hamstringsExos }) {
  const hamstringsValues = Object.values(hamstringsExos);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="chest-exos-list-container">
      <div>
        <p className="chest-exos-paragraph">Lorem ipsum dolor sit amet.</p>
      </div>
      <Stack direction={"row"} spacing={2} sx={{ marginBottom: "30px" }}>
        {hamstringsValues.map(
          (elem, index) =>
            index < 8 &&
            index >= 0 && (
              <Button
                type="secondary"
                key={index}
                onClick={null}
                onMouseOver={index === 0 ? () => setShowModal(true) : null}
              >
                {elem}
              </Button>
            )
        )}
      </Stack>
      <Stack direction={"row"} spacing={2}>
        {hamstringsValues.map(
          (elem, index) =>
            index < 16 &&
            index >= 8 && (
              <Button onClick={null} type="secondary" key={index}>
                {elem}
              </Button>
            )
        )}
      </Stack>
      <div>
        <Modal
          open={showModal}
          onOk={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
          okButtonProps={{ style: { background: "#42cda6cb", border: "0px" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          okText="Close"
          closable={true}
          maskClosable={true}
          keyboard={true}
          mask={true}
          width={"85%"}
          bodyStyle={{ height: "100%" }}
          // footer={null}
        >
          <div>
            <HamstringsModalContent></HamstringsModalContent>
          </div>
        </Modal>
      </div>
    </div>
  );
}

//antdesign problems:  Modal does not close with default behavior of maskClosable or keyboard #21283
// You have to use onCancel to control value, or visible is always false in your state.
