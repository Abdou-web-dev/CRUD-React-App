import { Button } from "antd";

export function OkBtn({ value, handleOkClick, selectedCountry }) {
  return (
    <Button
      className={
        selectedCountry ? "ok_suffix-btn country_selected" : "ok_suffix-btn"
      }
      disabled={!value}
      onClick={handleOkClick}
    >
      <span>OK</span>
    </Button>
  );
}
