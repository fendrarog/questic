import { useEffect, useRef, useState } from "react";

interface ButtonSwitchProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({
  checked = false,
  onChange = (f) => f,
}) => {
  return (
    <label className="relative inline-block w-[60px] h-[34px]">
      <input
        type="checkbox"
        className="hidden"
        onChange={onChange}
        checked={checked}
      />
      <span
        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] ${
          checked && "bg-slate-900"
        } rounded-[34px] duration-500`}
      ></span>
      <span
        className={`absolute cursor-pointer h-[26px] w-[26px] left-1 bottom-1 bg-white duration-500 rounded-full ${
          checked && "translate-x-[26px]"
        } ${checked && "bg-[#8d8d8d]"}`}
      ></span>
    </label>
  );
};
export default ButtonSwitch;
