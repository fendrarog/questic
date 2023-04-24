import { useEffect, useRef, useState } from "react";
import Confetti from "../features/Confetti";
import { useDimension } from "../../hooks/useDimension";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getTest } from "../../redux/questionsSlice";
import TestInner from "./TestInner";
import TestResult from "./TestResult";

const Test: React.FC = () => {
  const { test: data } = useAppSelector((state) => state.questions);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const block = useRef(null);
  const { width, height, top, left } = useDimension(block);

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
      {isRight ? (
        <Confetti width={width} height={height} top={top} left={left} />
      ) : null}

      <div className="flex justify-center items-center h-full">
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
          className={`max-w-[500px] bg-white dark:bg-[#1b1f2a] ${
            isRight === false && "animate-wiggle"
          } ${
            isIdle || "animate-appear"
          } rounded-sm p-4 md:p-12 ring-1 ring-slate-900/5 shadow-xl mx-auto w-2/3`}
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
