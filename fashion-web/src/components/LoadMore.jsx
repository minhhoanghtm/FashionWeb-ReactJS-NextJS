function LoadMore({ showMore, showLess, hasMore, canShowLess }) {
  if (!hasMore && !canShowLess) return null;
  return (
    <>
      <div className="flex justify-center gap-3 mt4">
        {hasMore && (
          <div className="flex justify-center mt-6">
            <button
              onClick={showMore}
              className="px-6 py-2 border rounded hover:text-white hover:bg-black"
            >
              Xem thêm
            </button>
          </div>
        )}

        {canShowLess && (
          <div className="flex justify-center mt-6">
            <button
              onClick={showLess}
              className="px-6 py-2 border rounded hover:text-white hover:bg-black"
            >
              Ẩn bớt
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default LoadMore;