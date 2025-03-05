interface Props {
  width: number;
  height: number;
  fill?: string;
  className?: string;
}

const ArrowTop = ({ width, height, fill, className }: Props) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width={width}
    height={height}
  >
    <path
      d="M.224 10.78l1.412 1.411L8 5.828l6.364 6.363 1.414-1.414L8 3z"
      fill="current"
      fill-rule="evenodd"
    ></path>
  </svg>
);

export default ArrowTop;
