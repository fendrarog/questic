interface SuccessSVGProps {
  className?: string;
}

const SuccessSVG: React.FC<SuccessSVGProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M4 7.5L7 10L11 5M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z"
        className="svg-success-elem-1"
      ></path>
    </svg>
  );
};

export default SuccessSVG;
