interface CircleSVGProps {
  color?: string;
  className?: string;
}

const CircleSVG: React.FC<CircleSVGProps> = ({
  color = "black",
  className = "w-6 h-6",
}) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-${color} ${className}`}
    >
      <path d="M0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C11.366 14.5 14.5 11.366 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5Z"></path>
    </svg>
  );
};

export default CircleSVG;
