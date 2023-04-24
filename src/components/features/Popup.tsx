import { useEffect, useState } from "react";

interface PopupProps {
  text: string;
  handlePopup: () => void;
  active: boolean;
  duration: number;
}

const Popup: React.FC<PopupProps> = ({
  text,
  handlePopup,
  active,
  duration,
}) => {
  const [animate, setAnimate] = useState("animate-fliesout");

  console.log(animate);

  const handleAnimate = () => {
    setAnimate("animate-fliesin");
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (animate === "animate-fliesin") {
      timer = setTimeout(handlePopup, duration * 1000 - 100);
    }

    return () => clearTimeout(timer);
  }, [animate, duration]);
  console.log(active);

  return (
    <div
      className="popup-wrapper fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-half-transparent"
      onClick={handleAnimate}
    >
      <div
        className={`${animate} max-w-[600px] p-5 bg-black text-white`}
        style={{ animationDuration: `${duration}s` }}
      >
        {text}
      </div>
    </div>
  );
};

export default Popup;
