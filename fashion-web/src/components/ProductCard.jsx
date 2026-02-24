import { Link, useNavigate } from "react-router-dom";
import StarRating from "./StartRating";

function ProductCard({ product }) {
  if (!product) return null;
  // const { showMore, toggle } = useShowMore();
  return (
    <>
      {/* Sản phẩm nổi bật  */}
      <Link key={product._id} to={`/product/${product.slug}`}>
        <div className="w-full overflow-hidden ">
          <div className="border border-black p-4 sm:p-4 rounded transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src={product.thumbnail || "/no-image.png"}
              alt={product.name}
              className="w-full h-auto sm:h-56 md:h-64 object-cover"
            />
            <div className="p-3 text-left">
              <h3 className="text-xs sm:text-sm font-bold truncate">
                {product.name}
              </h3>
              <div className="flex items-center mt-1">
                <span className="text-xs sm:text-sm font-semibold">
                  {product.new_price.toLocaleString("vi-VN")}đ
                </span>
                {product.old_price && (
                  <span className="text-[10px] sm:text-xs text-red-600 pl-2 line-through">
                    {product.old_price.toLocaleString("vi-VN")}đ
                  </span>
                )}
              </div>
              <p className="flex flex-col text-[11px] text-gray-500 mt-2">
                <span>Đã bán: {product.sold}</span>
                <span className="flex items-center gap-1 mt-1">
                  <StarRating rating={Number(product.rating_avg)} />
                  <span>({product.rating_count})</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
