import ReactConfetti from "react-confetti";
import { useScreenResize } from "../../hooks/useScreenResize";

interface ConfettiProps {
  width: number;
  height: number;
  top: number;
  left: number;
  numberOfPieces?: number;
  recycle?: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({
  width,
  height,
  top,
  left,
  numberOfPieces = 200,
  recycle = false,
}) => {
  const { screenHeight, screenWidth } = useScreenResize();
  return (
    <>
      <ReactConfetti
        width={screenWidth}
        height={screenHeight}
        numberOfPieces={numberOfPieces}
        confettiSource={{ x: left, y: top, w: width, h: 0 }}
        initialVelocityX={6}
        initialVelocityY={12}
        recycle={recycle}
        tweenDuration={500}
      />
    </>
  );
};

export default Confetti;
