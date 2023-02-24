import { Modal } from "antd";
import ScrollToTop from "react-scroll-to-top";
import { CloseX, TopArrow } from "../frontend/src/components/icons/Icons";

import { WorkoutsListFiltered } from "../frontend/src/components/sections/WorkoutsListFiltered";
import { AwesomeSpinner } from "../frontend/src/components/spinners/AwesomeSpinner";

export function Test({
  filteredResults,
  openFilteredListModal,
  setOpenFilteredListModal,
  showMobileFormModal,
  displaySpinner,
}) {
  return (
    <>
      <Modal
        className={
          filteredResults?.length >= 2
            ? `workouts-list-filtered-modal`
            : "workouts-list-filtered-modal no_scroll_bar"
        }
        open={openFilteredListModal}
        maskClosable={true}
        closable={filteredResults?.length >= 1}
        keyboard={true}
        mask={true}
        onOk={() => setOpenFilteredListModal(false)}
        onCancel={() => setOpenFilteredListModal(false)}
        footer={null}
        title={null}
        bodyStyle={{
          background: "rgba(211, 211, 211, 0.9)",
        }}
        maskStyle={{
          background: "rgba(211, 211, 211, 0.44)",
        }}
        closeIcon={<CloseX></CloseX>}
      >
        <div>
          <WorkoutsListFiltered
            {...{
              filteredResults,
              showMobileFormModal,
            }}
          />
          <div style={{ zIndex: "999" }}>
            <ScrollToTop className="toooop" smooth component={<TopArrow />} />
          </div>
        </div>
      </Modal>

      <>
        {!openFilteredListModal && displaySpinner ? <AwesomeSpinner /> : null}
      </>
    </>
  );
}
