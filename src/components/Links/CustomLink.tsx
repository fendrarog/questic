import { Link, useMatch } from "react-router-dom";

interface CustomLinkProps {
  children: React.ReactNode | React.ReactNode[];
  to: string;
  handleClick?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  to,
  handleClick,
}) => {
  const match = useMatch(to + "/*");

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <Link
      to={to}
      className={`${match ? activeLink : normalLink}`}
      style={{
        backgroundColor: match ? "blue" : "",
      }}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
