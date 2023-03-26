import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
  const date = useCurrentDate();
  const formattedDate = date.toLocaleString("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      Current time: {formattedDate}
    </>
  );
};