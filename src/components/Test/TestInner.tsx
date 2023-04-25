import TestInnerOption from "./TestInnerOption";

interface TestInnerProps {
  data: any[];
  progress: number;
  step: number;
  isIdle: boolean;
  clickedOption: number | null;
  isRight: boolean | null;
  selectHandler: (i: number) => void;
}

const TestInner: React.FC<TestInnerProps> = ({
  data,
  progress,
  step,
  isIdle,
  clickedOption,
  isRight,
  selectHandler,
}) => {
  return (
    <div className="text-xs sm:text-lg">
      <div className="relative w-full h-3">
        <div className="absolute w-full rounded-sm h-full bg-[#ececec] dark:bg-slate-700"></div>
        <div
          style={{ width: `${progress}%` }}
          className="absolute rounded-sm h-full bg-gradient-to-r from-purple-500 to-pink-500"
        ></div>
      </div>
      <div className="mt-8 text-slate-900 dark:text-white font-medium tracking-tight">
        {data[step].title}
      </div>
      <div className="flex flex-col gap-5 text-slate-900 dark:text-white mt-8">
        {data[step].options.map((answer: string, i: number) => (
          <TestInnerOption
            key={i}
            i={i}
            answer={answer}
            data={data}
            step={step}
            isIdle={isIdle}
            clickedOption={clickedOption}
            isRight={isRight}
            selectHandler={selectHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default TestInner;
