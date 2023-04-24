import React, { useState } from "react";
import QuestionsItem from "./QuestionsItem";
import Paginator from "./features/Paginator";
import { useAppSelector } from "../redux/hooks";
import { usePagination } from "../hooks/usePagination";
import Pagination from "./features/Pagination";
import { Link } from "react-router-dom";

const QuestionsList: React.FC = () => {
  // const { items: data, itemsOnPage: dataOnPage } = useAppSelector(
  //   (state) => state.questions
  // );
  const { items } = useAppSelector((state) => state.questions);

  const { maxPage, click, next, prev, currentPage, jump, currentData } =
    usePagination(items, 10);

  return (
    <>
      <h1 className="text-slate-900 dark:text-white text-7xl font-medium mb-5">
        Questic
      </h1>
      <p className="text-slate-900 dark:text-white text-4xl font-medium mb-10">
        Some questions for try yourself.
      </p>
      <div className="my-0 mx-auto px-5 max-w-[1400px]">
        <div className="relative py-20 px-10 bg-white dark:bg-[#1b1f2a]">
          <div className="h-[850px] overflow-y-scroll scroll-light dark:scroll-dark my-0 mx-auto pr-7">
            {/* Див который ниже закрывает background-clip: text; background-color'ом */}
            <div className="flex flex-col gap-3 min-h-full bg-white dark:bg-[#1b1f2a]">
              {currentData().map((questions) => (
                <Link key={questions.id} to={`/passage/${questions.id}`}>
                  <QuestionsItem {...questions} />
                </Link>
              ))}

              <div className="absolute bottom-3 ">
                <Pagination
                  maxPage={maxPage}
                  click={click}
                  next={next}
                  prev={prev}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuestionsList;
