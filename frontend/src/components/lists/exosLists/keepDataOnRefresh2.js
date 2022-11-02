import React from "react";

export const HamstringsExosList = React.forwardRef((props, ref) => {
  const { name, value, onChange } = props;

  const [inputValue, setInputValue] = React.useState(() => {
    return sessionStorage.getItem(name) || value || "";
  });

  const handleOnChange = (e) => {
    onChange && onChange(e);
    setInputValue(e.target.value);
    sessionStorage.setItem(name, e.target.value);
  };

  return (
    <input ref={ref} {...props} value={inputValue} onChange={handleOnChange} />
  );
});
