// import CancelIcon from "@mui/icons-material/Cancel";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { Button, Modal, Tooltip } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import minusIcon from "../../../assets/img/minus.png";
import { ThumbnailModal } from "../../modals/ThumbnailModal";

import "./exos_lists.scss";

export function ChestExosBtnsList({
  chestExos,
  suggestiveListBorder,
  setTitle,
}) {
  const chestValues = Object.values(chestExos);
  const [showRemainingBtns, setShowRemainingBtns] = useState(false);

  const handleDotsIconClick = () => {
    setShowRemainingBtns(true);
  };

  const titleLabel = (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <span style={{ fontSize: "10px" }}>Click to see more suggestions</span>
    </div>
  );

  const setModalInfos = (showModal, title, img, youtDemo) => {
    setShowThumbnailsModal(showModal);
    setmodalTitle(title);
    setmodalThumbnail(img);
    setyoutDemo(youtDemo);
  };

  const handleBtnsModalHover = (index) => {
    if (index === 3) {
      setModalInfos(
        true,
        "Chest Flye",
        "https://cdn.mos.cms.futurecdn.net/YWaPGifbdz6dgiUSCmHp2E.jpg",
        "https://www.youtube.com/watch?v=QENKPHhQVi4&pp=ugMICgJmchABGAE%3D"
      );
    } else if (index === 4) {
      setModalInfos(
        true,
        "Dumbbell Bench Press",
        "https://gethealthyu.com/wp-content/uploads/2014/08/Chest-Flies_Exercise.jpg",
        `https://www.youtube.com/watch?v=Y_7aHqXeCfQ`
      );
    } else if (index === 5) {
      setModalInfos(
        true,
        "Push-Up",
        "https://media.self.com/photos/57d889aef71ce8751f6b48f8/4:3/w_2560%2Cc_limit/push-up-tips_Feat.jpg",
        "https://www.youtube.com/watch?v=IODxDxX7oi4"
      );
    } else if (index === 6) {
      setModalInfos(
        true,
        "Dip",
        "https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_289519142_1000x.jpg?v=1633807458",
        "https://www.youtube.com/watch?v=2z8JmcrW-As"
      );
    } else if (index === 7) {
      setModalInfos(
        true,
        "Svend Press",
        "https://i.ytimg.com/vi/HIfOPZ28elA/maxresdefault.jpg",
        "https://www.youtube.com/watch?v=Mooao_wZHv4"
      );
    }

    switch (index) {
      case 8:
        setModalInfos(
          true,
          "Cable Iron Cross",
          "https://s3.amazonaws.com/prod.skimble/assets/945053/image_iphone.jpg",
          "https://www.youtube.com/watch?v=V1IYJGYj0YM"
        );
        break;
      case 9:
        setModalInfos(
          true,
          "Chaos Push-Up",
          "https://i.pinimg.com/originals/ac/b6/c7/acb6c79d3054e0fa0f7242dc4c9bfe06.jpg",
          "https://www.youtube.com/watch?v=Df4Jsk1ayk8"
        );
        break;
      case 10:
        setModalInfos(
          true,
          "Plyo Push-Up",
          "https://www.t-nation.com/wp-content/uploads/2020/01/The-Deficit-Plyo-Push-Up.jpeg",
          "https://www.youtube.com/watch?v=QlsBDcMK9EY"
        );
        break;
      case 11:
        setModalInfos(
          true,
          "Dumbbell Floor Press",
          "https://www.bodybuilding.com/fun/images/2014/dont-forget-the-floor-press-graphic-1b-700xh.jpg",
          "https://www.youtube.com/watch?v=uUGDRwge4F8"
        );
        break;
      case 12:
        setModalInfos(
          true,
          "Pause Push-Up",
          "https://s3.amazonaws.com/prod.skimble/assets/936958/image_iphone.jpg",
          "https://www.youtube.com/watch?v=9PuUkaGuyng"
        );
        break;
      case 13:
        setModalInfos(
          true,
          "Side-to-Side Landmine Press",
          "https://i.ytimg.com/vi/MQ1BFTA2hRI/maxresdefault.jpg",
          "https://www.youtube.com/watch?v=MQ1BFTA2hRI"
        );
        break;
      case 14:
        setModalInfos(
          true,
          "Close-Grip Push-Up",
          "https://weighttraining.guide/wp-content/uploads/2016/11/close-grip-push-up-resized.png",
          "https://www.youtube.com/watch?v=G2mlaEfpEIM"
        );
        break;

      default:
        break;
    }
  };

  const [showThumbnailsModal, setShowThumbnailsModal] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalThumbnail, setmodalThumbnail] = useState("");
  const [youtDemo, setyoutDemo] = useState("");

  return (
    <div
      className="chest-exos-list-container"
      style={{
        border: suggestiveListBorder,
      }}
    >
      <div>
        <p className="chest-exos-paragraph">
          Have no idea about the exercise you want to do ? Here are some
          suggestions :
        </p>
      </div>

      <Stack
        className="first-three-btns"
        direction={"row"}
        spacing={2}
        sx={{ marginBottom: "30px" }}
      >
        {chestValues.map(
          (elem, index) =>
            index < 3 &&
            index >= 0 && (
              <Button
                className="first-three-btns-btn"
                type="secondary"
                key={index}
                onClick={(e) => setTitle(e.target.innerHTML)}
              >
                <span className="btn-label">{elem}</span>
              </Button>
            )
        )}
      </Stack>
      {/* Ellipsis icon , dot dot dot */}

      <div className="ellipsis-wrapper">
        <IconButton onClick={handleDotsIconClick}>
          <Tooltip placement="top" title={titleLabel} arrowPointAtCenter>
            <MoreHorizIcon />
          </Tooltip>
        </IconButton>
      </div>

      {/* in order for corresponding css styles to work (when working with antd Modal), we need to specify a className for Modal wrapper, also for  */}
      {/* its children , but we must not nest it in the css rule selector of the golbal container of the component */}
      <Modal
        className="chest-exos-list-modal"
        open={showRemainingBtns}
        title={`Pick an exo from this list...`}
        onOk={() => setShowRemainingBtns(false)}
        onCancel={() => setShowRemainingBtns(false)}
        okButtonProps={{
          style: { background: "#42cda6cb", border: "0px", display: "none" },
        }}
        cancelButtonProps={{ style: { display: "none" } }} //=== footer={null}
        okText="Close"
        closable={false}
        maskClosable={true}
        keyboard={true}
        mask={true}
        width={"65%"}
      >
        <div className="chest-exos-list-modal-inner">
          <div className="close-icon">
            <IconButton
              onClick={() => setShowRemainingBtns(false)}
              className="close-icon-btn"
            >
              <img
                src={minusIcon}
                alt=""
                style={{ width: "44px", height: "44px" }}
              />
            </IconButton>
          </div>
          <Stack
            direction={"row"}
            spacing={5}
            className="chest-exos-modal-btns-stack1 btns-stack"
          >
            {chestValues.map(
              (elem, index) =>
                index < 8 &&
                index >= 3 &&
                showRemainingBtns === true && (
                  <Button
                    className="chest-modal-btn"
                    onClick={(e) => setTitle(e.target.innerHTML)}
                    type="secondary"
                    key={index}
                  >
                    <span className="btn-label">{elem}</span>
                    <div
                      className="modal-btn-eye-icon-wrapper"
                      onMouseOver={() => handleBtnsModalHover(index)}
                    >
                      <RemoveRedEyeIcon sx={{ color: "gray" }} />
                    </div>
                  </Button>
                )
            )}
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            className="chest-exos-modal-btns-stack2 btns-stack"
          >
            {chestValues.map(
              (elem, index) =>
                index < 12 &&
                index >= 8 &&
                showRemainingBtns === true && (
                  <Button
                    className="chest-modal-btn"
                    onClick={(e) => setTitle(e.target.innerHTML)}
                    type="secondary"
                    key={index}
                  >
                    <span className="btn-label">{elem}</span>
                    <div
                      className="modal-btn-eye-icon-wrapper"
                      onMouseOver={() => handleBtnsModalHover(index)}
                    >
                      <RemoveRedEyeIcon sx={{ color: "gray" }} />
                    </div>
                  </Button>
                )
            )}
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            className="chest-exos-modal-btns-stack3 btns-stack"
          >
            {chestValues.map(
              (elem, index) =>
                index < 15 &&
                index >= 12 &&
                showRemainingBtns === true && (
                  <Button
                    className="chest-modal-btn"
                    onClick={(e) => setTitle(e.target.innerHTML)}
                    type="secondary"
                    key={index}
                  >
                    <span className="btn-label">{elem}</span>
                    <div
                      className="modal-btn-eye-icon-wrapper"
                      onMouseOver={() => handleBtnsModalHover(index)}
                    >
                      <RemoveRedEyeIcon sx={{ color: "gray" }} />
                    </div>
                  </Button>
                )
            )}
          </Stack>
        </div>
      </Modal>

      <>
        <ThumbnailModal
          {...{
            showThumbnailsModal,
            setShowThumbnailsModal,
            modalTitle,
            modalThumbnail,
            youtDemo,
          }}
        />
      </>
    </div>
  );
}
