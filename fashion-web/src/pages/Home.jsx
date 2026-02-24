import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useLoadMore from "../hooks/useLoadMore";
import { useEffect, useState } from "react";
import { getAllProduct } from "../services/productService";
import { getAllCategory } from "../services/categoryService";
import LoadMore from "../components/LoadMore";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { displayedList, showMore, showLess, hasMore, canShowLess } = useLoadMore(products, 4);
  
  useEffect(() => {
    const fechData = async () => {
      try {
        const res = await getAllProduct();
        setProducts(res.data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    fechData();
  }, []);

  useEffect(() => {
    const fechData = async () => {
      try {
        const res = await getAllCategory();
        setCategories(res.data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    fechData();
  }, []);

  return (
    <>
      <div className="w-full my-5">
        {/* Sale */}
        <section className="h-[20vh] md:h-[25vh] w-full">
          <img
            src="../../public/sale.webp"
            alt="sale"
            className="w-full h-full object-cover"
          />
        </section>
        <hr className="my-5 mx-9" />

        {/* Category  */}
        <h3 className="text-left pl-6">Danh mục</h3>
        <section className="h-[25vh] max-w-7xl px-6">
          <div className="grid grid-cols-3 gap-3 h-full">
            {categories.map((item) => (
              <Link
                key={item.id}
                to={`/category/${item.slug}`}
                className="relative h-full overflow-hidden rounded-lg group"
              >
                {/* Ảnh  */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Chữ  */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <hr className="my-5 mx-9" />
        {/* Sản phẩm nổi bật  */}
        <h3 className="text-left pl-6">Sản phẩm nổi bật</h3>
        <section className="max-w-7xl mx-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {displayedList.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product.slug}`}
                className="block"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </section>

        <div>
          <LoadMore
            showMore={showMore}
            showLess={showLess}
            hasMore={hasMore}
            canShowLess={canShowLess}
          />
        </div>
      </div>
    </>
  );
}
export default Home;
