import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

interface PaginationProps {
  maxPage: number;
  click: (num: number) => void;
  next: () => void;
  prev: () => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  maxPage,
  click,
  next,
  prev,
  currentPage,
}) => {
  return (
    <div className="flex gap-2 text-lg font-medium text-white">
      <div
        className="flex justify-center items-center w-6 h-6 p-2 box-content rounded-full bg-[#0000ff50] hover:bg-[blue] cursor-pointer text-2xl"
        onClick={prev}
      >
        <HiOutlineChevronLeft />
      </div>
      {Array.from({ length: maxPage }, (el, i) => (
        <div
          key={i}
          className={`flex justify-center items-center w-6 h-6 p-2 box-content rounded-full bg-[#0000ff50] hover:bg-[blue] cursor-pointer select-none`}
          style={{
            backgroundColor: `${currentPage === i + 1 ? "blue" : ""}`,
          }}
          onClick={() => click(i + 1)}
        >
          {i + 1}
        </div>
      ))}
      <div
        className="flex justify-center items-center w-6 h-6 p-2 box-content rounded-full bg-[#0000ff50] hover:bg-[blue] cursor-pointer text-2xl"
        onClick={next}
      >
        <HiOutlineChevronRight />
      </div>
    </div>
  );
};

export default Pagination;
