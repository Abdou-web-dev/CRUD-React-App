import { Button, Stack } from "@mui/material";
import { Modal } from "antd";
import youtubeSvgIcon from "../../assets/img/youtubeSvgIcon.svg";
import "./modals_styles.scss";

export function ThumbnailModal({
  setShowThumbnailsModal,
  modalTitle,
  showThumbnailsModal,
  modalThumbnail,
  youtDemo,
}) {
  return (
    <div>
      <Modal
        className="exos-thumbnails-modal-wrapper"
        onOk={() => setShowThumbnailsModal(false)}
        onCancel={() => setShowThumbnailsModal(false)}
        open={showThumbnailsModal}
        maskClosable={true}
        closable={false}
        keyboard={true}
        mask={false}
        width={"22%"}
        footer={null}
        title={modalTitle}
        style={{
          right:
            modalTitle === `Dip`
              ? "0px"
              : modalTitle === `Svend Press`
              ? "-150px"
              : "150px",
          top: "20px",
        }}
      >
        <Stack
          justifyContent={"center"}
          alignItems="center"
          sx={{ position: "relative", bottom: "20px" }}
        >
          <Button
            disableRipple={true}
            className="exos-thumbnails-modal-youtube-btn"
          >
            <a href={youtDemo} target={`_blank`}>
              <img src={youtubeSvgIcon} alt="" width={"75px"} height={`75px`} />
            </a>
          </Button>
          <img
            className="exos-thumbnails-modal-wrapper-img"
            src={modalThumbnail}
            alt=""
            width={"300px"}
            height={`300px`}
          />
          <Button
            onClick={() => setShowThumbnailsModal(false)}
            className="exos-thumbnails-modal-wrapper-btn"
            color="error"
            size="large"
          >
            <span>Close</span>
          </Button>
        </Stack>
      </Modal>
    </div>
  );
}
