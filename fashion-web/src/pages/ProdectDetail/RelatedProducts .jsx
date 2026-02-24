import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/productService";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import useLoadMore from "../../hooks/useLoadMore";
import LoadMore from "../../components/LoadMore";
// import { ProductCard } from "../../components/ProductCard";

function RelatedProducts({ categoryId, currentProductId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { displayedList, showMore, showLess, hasMore, canShowLess} = useLoadMore(relatedProducts, 4);

  useEffect(() => {
    if (!categoryId) return;
    const fechRelatedProduct = async () => {
      try {
        const res = await getAllProduct();
        const products = res.data || [];
        const filtered = products
          .filter(
            (item) =>
              Number(item.category_id) === Number(categoryId) &&
              Number(item.id) !== Number(currentProductId),
          );
        setRelatedProducts(filtered);
        // console.log(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    fechRelatedProduct();
  }, [categoryId, currentProductId]);

  if (!relatedProducts) return null;
  // console.log("Related:", relatedProducts);

  return (
    <>
      <div className="my-5">
        <h2 className="text-center text-xl font-bold my-5">
          Các sản phẩm tương tự
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayedList.map((item) => (
            <Link key={item.id} to={`/product/${item.slug}`} className="block">
              <ProductCard product={item} />
            </Link>
          ))}
        </div>
        <LoadMore showMore={showMore} showLess={showLess} hasMore={hasMore} canShowLess={canShowLess}/>
      </div>
    </>
  );
}

export default RelatedProducts;
