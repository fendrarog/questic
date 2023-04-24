interface QuestionsItemProps {
  id: string;
  name: string;
  image: string;
  amount: number;
  difficulty: number;
  description: string;
}

const QuestionsItem: React.FC<QuestionsItemProps> = ({
  id,
  name,
  image,
  amount,
  difficulty,
  description,
}) => {
  return (
    <>
      <div className="flex box-content h-20 md:h-36 group cursor-pointer animate-fromshadow">
        <div className="flex-[0_0_20%] relative overflow-hidden ">
          <img
            className="w-full h-full object-cover absolute top-0 left-0 group-hover:scale-110 will-change-transform duration-500"
            src={image}
            alt={name}
          />
        </div>
        <div className="pl-4 py-4 flex gap-5 text-slate-900 dark:text-white group-hover:bg-[#f9f9f9] dark:group-hover:bg-slate-800 duration-200">
          <div className="text-center text-lg md:text-2xl flex-[0_0_15%] flex justify-center items-start">
            {name}
          </div>
          <div className="text-center text-lg md:text-2xl flex-[0_0_15%] flex justify-center items-start">{`Вопросов ${amount}`}</div>
          <div className="text-center text-lg md:text-2xl flex-[0_0_15%] flex justify-center items-start">{`Сложность ${
            difficulty === 0
              ? "низкая"
              : difficulty === 1
              ? "средняя"
              : difficulty === 2
              ? "высокая"
              : "не определена"
          }`}</div>
          <div className="px-5 text-sm md:text-lg leading-tight md:leading-relaxed line-clamp-3 md:line-clamp-4">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};
export default QuestionsItem;
