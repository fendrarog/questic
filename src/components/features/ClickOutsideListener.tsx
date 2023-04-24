import { useEffect, useRef } from "react";

interface ClickOutListenerProps {
  mouseEvent: keyof DocumentEventMap;
  touchEvent?: keyof DocumentEventMap;
  onClickOut: () => void;
  isActive: boolean;
  children: JSX.Element;
}

const ClickOutListener: React.FC<ClickOutListenerProps> = ({
  children,
  mouseEvent,
  touchEvent,
  onClickOut,
  isActive,
}) => {
  const ref = useRef<any>(null);
  useEffect(() => {
    const handleMouseClick = (e: Event) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        onClickOut();
      }
    };

    document.addEventListener("click", handleMouseClick);

    return () => document.removeEventListener(mouseEvent, handleMouseClick);
  }, []);

  if (!isActive) return null;

  return <div ref={ref}>{children}</div>;
};

export default ClickOutListener;
