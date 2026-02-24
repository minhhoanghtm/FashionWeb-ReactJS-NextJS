import { useEffect, useState } from "react";

function useLoadMore(
  list = [],
  step = 2, //số lượng tiếp theo
) {
  const [visible, setVisible] = useState(step);

  useEffect(() => {
    setVisible(step);
  }, [list, step]);
  const showMore = () => {
    setVisible((prev) => Math.min(prev + step));
  };

  const showLess = () => {
    setVisible(step);
  };
  const displayedList = list.slice(0, visible);
  const hasMore = visible < list.length;
  const canShowLess = visible > step;
  return {
    displayedList,
    showMore,
    showLess,
    hasMore,
    canShowLess
  };
}

export default useLoadMore;
