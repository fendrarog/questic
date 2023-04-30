import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getTest } from "../../redux/questionsSlice";
import TestInner from "./TestInner";
import TestResult from "./TestResult";
import { useStateContext } from "../../context/ContextProvider";
import Confetti from "../features/Confetti";

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
  const [passedQuestions, setPassedQuestions] = useState(0);

  const selectHandler = (i: number) => {
    if (isIdle) return;
    setIsIdle(true);
    setClickedOption(i);
    setIsRight(i === data[step].correct);
    i === data[step].correct && setPassedQuestions((val) => val + 1);
  };

  useEffect(() => {
    if (!id) return;
    dispatch(getTest(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!isIdle) return;
    if (isRight) window.navigator.vibrate(100);
    if (!isRight) window.navigator.vibrate(500);
  }, [isIdle]);

  return (
    <>
      <Confetti isActive={isRight} isScreenSmall={screenWidth! < 850} />

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
          className={`max-w-[700px] flex-1 bg-white dark:bg-[#222e3a] ${isRight === false && "animate-wiggle"} ${
            isIdle || "animate-appear"
          } rounded-sm py-4 pl-4 lg:py-12 lg:pl-12 ring-1 ring-slate-900/5 shadow-xl ml-2 mr-10 sm:mx-auto w-2/3`}
        >
          {step < data.length ? (
            <TestInner
              data={data}
              step={step}
              isIdle={isIdle}
              clickedOption={clickedOption}
              isRight={isRight}
              selectHandler={selectHandler}
            />
          ) : (
            <TestResult step={step} passedQuestions={passedQuestions} />
          )}
        </div>
      </div>
    </>
  );
};

export default Test;
