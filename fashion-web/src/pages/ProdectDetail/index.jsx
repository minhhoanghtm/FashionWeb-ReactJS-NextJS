import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoProduct from "./InfoProduct";
import { getProductBySlug } from "../../services/productService";
import Evaluate from "./Evaluate";
import RelatedProducts from "./RelatedProducts ";

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getProductBySlug(slug);
        setProduct(res);
        // console.log("Set product:", res);
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
      // console.log(product);
    }
  }, [slug]);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const res = await getProductBySlug(slug);
  //     setProduct(res);
  //   };

  //   fetchProduct();
  // }, [slug]);

  if (loading) return <p>Đang tải...</p>;
  if (!product) return <p>Không có dữ liệu</p>;

  return (
    <>
      <InfoProduct product={product} />
      {product && <Evaluate productId={product.id} />}
      <RelatedProducts
        categoryId={product.category_id}
        currentProductId={product.id}
      />
    </>
  );
}

export default ProductDetail;
