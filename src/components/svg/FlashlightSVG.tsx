interface FlashlightSVGProps {
  className?: string;
}

const FlashlightSVG: React.FC<FlashlightSVGProps> = ({
  className = "w-6 h-6",
}) => {
  return (
    <svg
      enableBackground="new 0 0 32 32"
      id="Stock_cut"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`${className}`}
    >
      <desc></desc>
      <g>
        <path
          d="M21,12   c0-2.761-2.239-5-5-5s-5,2.239-5,5"
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          className="svg-flashlight-elem-1"
        ></path>
        <path
          d="M11,12v4l2,2v11   c0,1.105,0.895,2,2,2h2c1.105,0,2-0.895,2-2V18l2-2v-4H11z"
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          className="svg-flashlight-elem-2"
        ></path>
        <line
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="15.984"
          x2="15.984"
          y1="0"
          y2="4"
          className="svg-flashlight-elem-3"
        ></line>
        <line
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="19"
          x2="13"
          y1="27"
          y2="27"
          className="svg-flashlight-elem-4"
        ></line>
        <line
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="8"
          x2="4"
          y1="12"
          y2="12"
          className="svg-flashlight-elem-5"
        ></line>
        <line
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="24"
          x2="28"
          y1="12"
          y2="12"
          className="svg-flashlight-elem-6"
        ></line>
        <line
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="9"
          x2="6"
          y1="6"
          y2="3"
          className="svg-flashlight-elem-7"
        ></line>
        <line
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="23"
          x2="26"
          y1="6"
          y2="3"
          className="svg-flashlight-elem-8"
        ></line>
      </g>
    </svg>
  );
};

export default FlashlightSVG;
