import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { paginateData, setPages } from "../../redux/questionsSlice";

type PaginatorProps = {
  data: any[];
  pageSize: number;
  portionNumber?: number;
  portionSize?: number;
  setPortionNumber?: (n: number) => void;
};

const Paginator: React.FC<PaginatorProps> = ({
  data,
  pageSize,
  portionNumber,
  portionSize,
  setPortionNumber,
}) => {
  const pages = useAppSelector((state) => state.questions.pages);

  const [currentPage, setCurrentPage] = useState(1);

  const pageStart = (currentPage - 1) * pageSize;
  const pageEnd = currentPage * pageSize;

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(pageStart, pageEnd);
    dispatch(paginateData({pageStart, pageEnd}));
  }, [currentPage]);

  useEffect(() => {
    dispatch(setPages(Math.ceil(data.length / pageSize)));
    console.log("usePaginated");
  }, []);

  return (
    <div className="flex gap-2 text-lg font-medium text-white">
      <div
        className="border w-5"
        onClick={() => setCurrentPage((val) => val - 1)}
      >
        -
      </div>
      {pages &&
        Array.from({ length: pages }, (el, i) => (
          <div
            key={i}
            className={`flex justify-center items-center w-6 h-6 p-2 box-content rounded-full bg-[#0000ff50] hover:bg-[blue] cursor-pointer`}
            style={{
              backgroundColor: `${currentPage === i + 1 ? "blue" : ""}`,
            }}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </div>
        ))}
      <div
        className="border w-5"
        onClick={() => setCurrentPage((val) => val + 1)}
      >
        +
      </div>
    </div>
  );
};

export default Paginator;
