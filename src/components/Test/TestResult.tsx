interface TestResultProps {
  progress: number;
  step: number;
  passedQuestions: number;
}

const TestResult: React.FC<TestResultProps> = ({
  progress,
  step,
  passedQuestions,
}) => {
  return (
    <div className="text-slate-900 dark:text-white text-3xl font-medium tracking-tight">
      Вы дали {passedQuestions} правильных ответа из {step} вопросов
    </div>
  );
};
export default TestResult;
