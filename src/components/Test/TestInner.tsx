import TestInnerOption from "./TestInnerOption";

interface TestInnerProps {
  data: any[];
  step: number;
  isIdle: boolean;
  clickedOption: number | null;
  isRight: boolean | null;
  selectHandler: (i: number) => void;
}

const TestInner: React.FC<TestInnerProps> = ({
  data,
  step,
  isIdle,
  clickedOption,
  isRight,
  selectHandler,
}) => {
  return (
    <div className="text-xs sm:text-lg">
      <div className="text-slate-900 dark:text-white font-medium tracking-tight">
        {data[step].title}
      </div>
      <div className="flex flex-col text-slate-900 dark:text-white mt-2">
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
