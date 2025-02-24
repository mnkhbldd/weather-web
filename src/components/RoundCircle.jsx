export const RoundCircle = ({ className }) => {
  return (
    <div
      className={
        `border-[3px] border-red-500 opacity-[0.1] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ` +
        className
      }
    ></div>
  );
};
