import React, { useRef, useState } from "react";
import { useOverflow } from "../../hooks/useOverflow";
import CircleSVG from "../svg/CircleSVG";
import FailureSVG from "../svg/FailureSVG";
import SuccessSVG from "../svg/SuccessSVG";
import FlashlightSVG from "../svg/FlashlightSVG";
import Popup from "../features/Popup";

interface TestInnerOptionProps {
  data: any[];
  i: number;
  step: number;
  isIdle: boolean;
  clickedOption: number | null;
  isRight: boolean | null;
  selectHandler: (i: number) => void;
  answer: string;
}

const TestInnerOption: React.FC<TestInnerOptionProps> = ({
  data,
  i,
  step,
  isIdle,
  clickedOption,
  isRight,
  selectHandler,
  answer,
}) => {
  const refOption = useRef(null);
  const overflow = useOverflow(refOption, answer);

  const [isPopup, setIsPopup] = useState(false);

  console.log(isPopup);

  return (
    <div className="relative">
      <div
        onClick={() => selectHandler(i)}
        className={`relative flex gap-5 items-center py-1 px-2 duration-200 ${
          isIdle
            ? data[step].correct === i
              ? "pointer-events-none"
              : !isRight && clickedOption === i
              ? "pointer-events-none"
              : "hover:bg-light-gray dark:hover:bg-slate-800 hover:drop-shadow-xl"
            : "hover:bg-light-gray dark:hover:bg-slate-800 hover:drop-shadow-xl"
        }   cursor-pointer rounded-sm ${
          isIdle ? data[step].correct === i && "bg-green-500" : ""
        } ${
          isIdle ? (!isRight ? clickedOption === i && "bg-red-500" : "") : ""
        }`}
      >
        <div className="absolute left-1.5">
          {isIdle ? (
            data[step].correct === i ? (
              <SuccessSVG className="dark:stroke-green-100 stroke-green-950 w-3 sm:w-6 h-3 sm:h-6" />
            ) : !isRight && clickedOption === i ? (
              <FailureSVG className="dark:stroke-red-100 stroke-red-950 w-3 sm:w-6 h-3 sm:h-6" />
            ) : (
              <CircleSVG
                className={
                  "dark:stroke-white stroke-black w-3 sm:w-6 h-3 sm:h-6"
                }
              />
            )
          ) : (
            <CircleSVG
              className={"dark:stroke-white stroke-black w-3 sm:w-6 h-3 sm:h-6"}
            />
          )}
        </div>
        <div
          ref={refOption}
          className="relative pl-4 sm:pl-8 tracking-tight whitespace-nowrap text-ellipsis overflow-x-auto scroll-none"
        >
          {answer}
        </div>
      </div>
      {overflow && (
        <div
          className="absolute -right-12 sm:-right-14 -bottom-1 p-1 rounded-full shadow-xl bg-white dark:bg-slate-800 cursor-pointer"
          onClick={isIdle ? undefined : () => setIsPopup(true)}
        >
          <FlashlightSVG
            className={" dark:stroke-white stroke-black w-4 sm:w-6 h-4 sm:h-6"}
          />
        </div>
      )}
      {isPopup && (
        <Popup
          text={answer}
          handlePopup={() => {
            setIsPopup(false);
          }}
          active={isPopup}
          duration={0.3}
        />
      )}
    </div>
  );
};

export default TestInnerOption;
