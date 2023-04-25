import { useEffect, useRef, useState } from "react";
// import Confetti from "../features/Confetti";
import { useDimension } from "../../hooks/useDimension";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getTest } from "../../redux/questionsSlice";
import TestInner from "./TestInner";
import TestResult from "./TestResult";
import ConfettiExplosion from "react-confetti-explosion";
import { useStateContext } from "../../context/ContextProvider";

const Test: React.FC = () => {
  const { test: data } = useAppSelector((state) => state.questions);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const block = useRef(null);
  const { screenWidth } = useStateContext();

  const [step, setStep] = useState(0);
  const [isIdle, setIsIdle] = useState(false);
  const [clickedOption, setClickedOption] = useState<null | number>(null);
  const [isRight, setIsRight] = useState<null | boolean>(null);
  const [progress, setProgress] = useState(0);
  const [passedQuestions, setPassedQuestions] = useState(0);

  const selectHandler = (i: number) => {
    if (isIdle) return;
    setIsIdle(true);
    setClickedOption(i);
    setIsRight(i === data[step].correct);
    setProgress((val) => val + 100 / data.length);
    i === data[step].correct && setPassedQuestions((val) => val + 1);
  };

  useEffect(() => {
    if (!id) return;
    dispatch(getTest(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!isIdle) return;
    if (isRight) window.navigator.vibrate(200);
    if (!isRight) window.navigator.vibrate(500);
  }, [isIdle]);

  return (
    <>
      {/* {isRight ? (
        <Confetti width={width} height={height} top={top} left={left} />
      ) : null} */}

      {isRight ? (
        <>
          <ConfettiExplosion
            duration={2000}
            width={screenWidth}
            force={0.2}
            particleCount={75}
            particleSize={screenWidth! < 600 ? 5 : 17}
            className="fixed top-0 left-0"
          />
          <ConfettiExplosion
            duration={2000}
            width={screenWidth}
            force={0.2}
            particleCount={75}
            particleSize={screenWidth! < 600 ? 5 : 17}
            className="fixed top-0 right-0"
          />
        </>
      ) : null}

      <div className="flex sm:justify-center items-center h-full">
        <div
          ref={block}
          onClick={() => {
            if (isIdle) {
              setStep((val) => val + 1);
              setIsRight(null);
              setIsIdle(false);
              setClickedOption(null);
            }
          }}
          className={`max-w-[700px] flex-1 bg-white dark:bg-[#1b1f2a] ${
            isRight === false && "animate-wiggle"
          } ${
            isIdle || "animate-appear"
          } rounded-sm p-4 md:p-12 ring-1 ring-slate-900/5 shadow-xl ml-5 mr-10 sm:mx-auto w-2/3`}
        >
          {step < data.length ? (
            <TestInner
              data={data}
              progress={progress}
              step={step}
              isIdle={isIdle}
              clickedOption={clickedOption}
              isRight={isRight}
              selectHandler={selectHandler}
            />
          ) : (
            <TestResult
              progress={progress}
              step={step}
              passedQuestions={passedQuestions}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Test;
