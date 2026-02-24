import { useEffect, useMemo, useState } from "react";
import ProductSlider from "../../components/ProductSlider";
import DropDown from "../../components/DropDown";

function InfoProduct({ product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  // const [selectedPrice, setSelectedPrice] = useState(0);
  const [count, setCount] = useState(0);
  // ===== Lấy danh sách màu duy nhất =====
  const uniqueColors = useMemo(() => {
    if (!product?.product_variants) return [];

    return [
      ...new Map(product.product_variants.map((v) => [v.color, v])).values(),
    ];
  }, [product]);

  // ===== Auto chọn màu đầu tiên =====
  useEffect(() => {
    if (uniqueColors.length && !selectedColor) {
      setSelectedColor(product.thumbnail);
    }
  }, [uniqueColors]);

  // ===== Ảnh theo màu =====
  const selectedColorVariant = product?.product_variants?.find(
    (v) => v.color === selectedColor,
  );
  //======Giá theo mẫu ====
  const selectedVariant = product?.product_variants?.find(
    (v) => v.color === selectedColor && v.size === selectedSize,
  );
  // const displayPrice = selectedVariant?.price || product?.new_price;
  // const displayOldPrice = selectedVariant?.old_price || product?.old_price;
  // console.log("Giá mới", displayPrice);
  // console.log(displayOldPrice);
  const images = [
    selectedColorVariant?.image,
    ...(product?.gallery || []),
  ].filter(Boolean);

  // ===== Size theo màu =====
  const availableSizes = useMemo(() => {
    if (!product?.product_variants) return [];

    return product.product_variants
      .filter((v) => v.color === selectedColor)
      .map((v) => v.size);
  }, [product, selectedColor]);

  // ===== Reset size khi đổi màu =====
  useEffect(() => {
    setSelectedSize("");
  }, [selectedColor]);

  // ===== Fix công thức giảm giá =====
  const discountPercent = Math.round(
    ((product.old_price - product.new_price) / product.old_price) * 100,
  );
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT - IMAGE */}
        <ProductSlider images={images} />

        {/* RIGHT - INFO */}
        <div className="text-left flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold text-[#CE5937]">
            {product.name}
          </h1>

          {/* PRICE */}
          <div className="flex items-end gap-4">
            <span className="text-2xl text-[#E53B26] font-medium">
              {product.new_price.toLocaleString("vi-VN")}đ
            </span>
            <span className="text-gray-400 line-through">
              {product.old_price.toLocaleString("vi-VN")}đ
            </span>
            <span className="bg-[#17A854] text-white px-2 py-1 rounded-md">
              -{discountPercent}%
            </span>
          </div>
          <hr />
          <p>{product.description}</p>
          <hr />

          {/* ===== COLOR ===== */}
          <div className="flex gap-3 mt-2">
            <p>Chọn mẫu</p>
            {uniqueColors.map((item) => (
              <button
                key={item.color}
                onClick={() => setSelectedColor(item.color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === item.color
                    ? "border-black"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: item.color_code }}
              />
            ))}
          </div>

          {/* ===== SIZE ===== */}
          <span>Vui lòng chọn kích thước</span>
          <DropDown
            options={availableSizes}
            value={selectedSize}
            onChange={setSelectedSize}
          />
          {/* Quanity  */}
          <div className="w-full flex items-center gap-3 mt-4">
            <span>Số lượng</span>
            <div className="flex items-center border border-black rounded overflow-hidden">
              <button
                onClick={() => setCount((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1"
              >
                -
              </button>
              <button className="px-4 py-1 border-x border-black">
                {count}
              </button>
              <button onClick={() => setCount(count + 1)} className="px-3 py-1">
                +
              </button>
            </div>
          </div>
          {/* BUTTON */}
          <div className="w-full flex">
            <button
              disabled={!selectedSize}
              className="flex-1 rounded-s-lg border border-black px-2 py-3 font-bold hover:bg-gray-400 hover:text-white"
            >
              Thêm vào giỏ hàng
            </button>
            <button
              disabled={!selectedSize}
              className="flex-1 rounded-e-lg border border-black bg-black text-white px-2 py-3 font-bold hover:bg-gray-400 hover:text-white"
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
