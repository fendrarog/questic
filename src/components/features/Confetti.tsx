import confetti from "canvas-confetti";
import { useEffect } from "react";

interface ConfettiProps {
  isActive: boolean | null;
  isScreenSmall: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({ isActive, isScreenSmall }) => {
  let count = 200;
  let defaultToRight = {
    origin: { x: 0 },
    angle: 45,
    ticks: 500,
  };
  let defaultToLeft = {
    origin: { x: 1 },
    angle: 135,
    ticks: 500,
  };

  interface fireProps {
    particleRatio: number;
    velocityRatio?: number;
    scalarRatio?: number;
    opts: Record<string, number>;
  }

  function fireToRight({
    particleRatio,
    velocityRatio = 40,
    scalarRatio = 1,
    opts,
  }: fireProps) {
    confetti(
      Object.assign({}, defaultToRight, opts, {
        particleCount:
          Math.floor(count * particleRatio) * (isScreenSmall ? 0.4 : 1),
        startVelocity: velocityRatio * (isScreenSmall ? 1 : 2),
        scalar: scalarRatio * (isScreenSmall ? 1 : 2),
      })
    );
  }

  function fireToLeft({
    particleRatio,
    velocityRatio = 40,
    scalarRatio = 1,
    opts,
  }: fireProps) {
    confetti(
      Object.assign({}, defaultToLeft, opts, {
        particleCount:
          Math.floor(count * particleRatio) * (isScreenSmall ? 0.4 : 1),
        startVelocity: velocityRatio * (isScreenSmall ? 1 : 2),
        scalar: scalarRatio * (isScreenSmall ? 1 : 2),
      })
    );
  }

  useEffect(() => {
    if (!isActive) return;

    fireToRight({
      particleRatio: 0.25,
      velocityRatio: 45,
      opts: {
        spread: 26,
      },
    });
    fireToRight({
      particleRatio: 0.2,
      velocityRatio: 50,
      opts: {
        spread: 60,
      },
    });
    fireToRight({
      particleRatio: 0.35,
      scalarRatio: 0.8,
      opts: {
        spread: 100,
        decay: 0.91,
      },
    });
    fireToRight({
      particleRatio: 0.1,
      opts: {
        spread: 120,
        decay: 0.92,
      },
    });
    fireToRight({
      particleRatio: 0.1,
      opts: {
        spread: 120,
      },
    });
    fireToLeft({
      particleRatio: 0.25,
      velocityRatio: 45,
      opts: {
        spread: 26,
      },
    });
    fireToLeft({
      particleRatio: 0.2,
      velocityRatio: 50,
      opts: {
        spread: 60,
      },
    });
    fireToLeft({
      particleRatio: 0.35,
      scalarRatio: 0.8,
      opts: {
        spread: 100,
        decay: 0.91,
      },
    });
    fireToLeft({
      particleRatio: 0.1,
      opts: {
        spread: 120,
        decay: 0.92,
      },
    });
    fireToLeft({
      particleRatio: 0.1,
      opts: {
        spread: 120,
      },
    });
  }, [isActive]);
  return <></>;
};

export default Confetti;
