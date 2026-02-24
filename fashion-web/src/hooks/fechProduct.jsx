function fechProduct() {
    const [products, setProducts] = useState([]);
      const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const res = await getProductBySlug(slug);
            setProduct(res);
            // console.log("Set product:", res);
            if (res?.category_id) {
              const relatedRes = await getProductByCategory(res.category_id);
              const related = relatedRes.data
                .filter((p) => p.id !== res.id) //Loại bỏ chính nó
                .slice(0, 4);
    
              setRelatedProducts(related);
            }
          } catch (err) {
            console.log("Error:", err);
            setError("Không tìm thấy sản phẩm");
          } finally {
            setLoading(false);
          }
        };
    
        if (slug) {
          fetchData();
          console.log(product);
        }
      }, [slug]);

    return 
}