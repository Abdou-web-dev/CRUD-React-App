import { Button, Input } from "antd";
import cancelIcon from "../../assets/img/cancelIcon.svg";
import { CloseBtn } from "../buttons/CloseBtn";
import { OkBtn } from "../buttons/OkBtn";
import { CloseX } from "../icons/Icons";

export function EditInput({
  okBtnClicked,
  showEditInput,
  setShowEditInput,
  value,
  setValue,
  valueIsValid,
  handleChange,
  handleOkClick,
  fullNameValue,
}) {
  return (
    <>
      <div className="profile-page-email-input-cancel_btn-not_valid-wrapper">
        <div className="profile-page-email-input-wrapper">
          <Input
            className={`profile-page-email-input
                ${
                  okBtnClicked && showEditInput && value && !valueIsValid
                    ? "ok_clicked_email_invalid"
                    : ""
                }
                `}
            value={value}
            onChange={handleChange}
            suffix={
              <>
                {value && (
                  <Button
                    className="clear_suffix-btn"
                    // disabled={!value}
                    onClick={() => setValue("")}
                  >
                    <CloseX></CloseX>
                  </Button>
                )}

                <OkBtn {...{ value, handleOkClick }} />
              </>
            }
            placeholder={
              value === fullNameValue ? "New Full Name..." : " New Email..."
            }
            onPressEnter={handleOkClick}
            disabled={null}
          />

          <CloseBtn {...{ cancelIcon, setShowEditInput }} />
        </div>
        <>
          {!valueIsValid && value && (
            <div className="not_valid_sentence">
              {value === fullNameValue ? (
                <span>This full name is not valid</span>
              ) : (
                <span>This email address is not valid</span>
              )}
            </div>
          )}
        </>
      </div>
    </>
  );
}
