import React, { useState } from "react";
import{ Switch} from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
};

export const ModeSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
    isDark={checked}
      onClick={() => setChecked((prev) => !prev)}
    />
  );
};