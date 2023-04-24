const QuestionsFieldEmpty: React.FC = () => {
  return (
    <>
      <div
        className={`mt-32 md:mt-64 bg-white dark:bg-slate-900/30 rounded-lg p-4 md:p-12 ring-1 ring-slate-900/5 shadow-xl mx-auto w-2/3 text-slate-900 dark:text-white text-md md:text-2xl`}
      >
        Выберите тест и проверьте свои знания
      </div>
    </>
  );
};

export default QuestionsFieldEmpty;
