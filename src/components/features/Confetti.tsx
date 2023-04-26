import JSConfetti from "js-confetti";
import { useEffect } from "react";

interface ConfettiProps {
  isActive: boolean | null;
  screenSmall: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({ isActive, screenSmall }) => {
  const jsConfetti = new JSConfetti();
  useEffect(() => {
    if (!isActive) return;

    jsConfetti.addConfetti({
      confettiRadius: screenSmall ? 4 : 6,
      confettiNumber: 500,
    });
  }, [isActive]);
  return <></>;
};

export default Confetti;
