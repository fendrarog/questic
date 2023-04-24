import { MdOutlineMenu } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import ButtonSwitch from "./Buttons/ButtonSwitch";

const Navbar = () => {
  const { setActiveMenu, setThemeMode, currentMode } = useStateContext();

  return (
    <div className="flex justify-between items-center p-2 md:mx-6 relative">
      <button
        type="button"
        onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        style={{ color: "blue" }}
        className="flex relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: "transparent" }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        <MdOutlineMenu />
      </button>
      <ButtonSwitch onChange={setThemeMode} checked={currentMode === "Dark"} />
    </div>
  );
};

export default Navbar;
