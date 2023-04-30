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
  return (
    <>
      <div
        onClick={() => selectHandler(i)}
        className={`relative min-h-[35px] flex gap-3 items-center pl-2 pr-4 lg:pr-12 duration-200 ${
          isIdle
            ? data[step].correct === i
              ? "pointer-events-none"
              : !isRight && clickedOption === i
              ? "pointer-events-none"
              : "lg:hover:bg-light-gray lg:dark:hover:bg-slate-800 lg:hover:drop-shadow-xl"
            : "lg:hover:bg-light-gray lg:dark:hover:bg-slate-800 lg:hover:drop-shadow-xl"
        }   cursor-pointer rounded-sm ${
          isIdle ? data[step].correct === i && "bg-green-500" : ""
        } ${
          isIdle ? (!isRight ? clickedOption === i && "bg-red-500" : "") : ""
        }`}
      >
        <div className="">
          {isIdle ? (
            data[step].correct === i ? (
              <SuccessSVG className="dark:stroke-green-100 stroke-green-950 w-4 sm:w-5 h-4 sm:h-5" />
            ) : !isRight && clickedOption === i ? (
              <FailureSVG className="dark:stroke-red-100 stroke-red-950 w-4 sm:w-5 h-4 sm:h-5" />
            ) : (
              <CircleSVG
                className={
                  "dark:stroke-[#596b7d] stroke-black w-4 sm:w-5 h-4 sm:h-5"
                }
              />
            )
          ) : (
            <CircleSVG
              className={
                "dark:stroke-[#596b7d] stroke-black w-4 sm:w-5 h-4 sm:h-5"
              }
            />
          )}
        </div>
        <div className="relative grow flex py-3 items-center tracking-tight text-base md:text-lg lg:text-lg break-words">
          {answer}
          <div className="absolute bottom-0 left-0 h-[0.5px] w-[calc(100%+1rem)] lg:w-[calc(100%+3rem)] bg-[#3f4e5c]"></div>
        </div>
        {/* {overflow && (
          <div
            className="absolute -right-12 sm:-right-14 -bottom-1 p-1 rounded-full shadow-xl bg-white dark:bg-slate-800 cursor-pointer"
            onClick={isIdle ? undefined : () => setIsPopup(true)}
          >
            <FlashlightSVG
              className={
                " dark:stroke-white stroke-black w-4 sm:w-6 h-4 sm:h-6"
              }
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
        )} */}
      </div>
    </>
  );
};

export default TestInnerOption;
