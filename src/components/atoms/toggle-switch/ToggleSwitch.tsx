import { FC } from "react";
import style from "./ToggleSwitch.module.scss";
import { useToggle } from "../../../hooks/useToggle";

interface ToggleSwitchI {
  // handleToggle:
}

const ToggleSwitch: FC<ToggleSwitchI> = ({}) => {
  const [value, toggle] = useToggle();

  return (
    <span
      onClick={toggle}
      className={`${style["switch-toggle"]} ${
        value && style["switch-toggle_active"]
      }`}
    >
      <span
        className={`${style["switch-toggle__tumbler"]} ${
          value && style["switch-toggle__tumbler_active"]
        }`}
      />
    </span>
  );
};
export default ToggleSwitch;
