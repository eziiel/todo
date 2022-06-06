import React from "react";
import { ContextTheme } from "../../context/contextTheme";
import { InputText } from "../../styled/inputStyled";

export const Input = ({ value, onChange }) => {
  const { theme } = React.useContext(ContextTheme);

  return <InputText value={value} onChange={onChange} theme={theme} />;
};
