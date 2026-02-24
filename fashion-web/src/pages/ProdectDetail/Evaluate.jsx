import { useEffect, useState } from "react";
import { getReviewByProductId } from "../../services/reviewService";
import { getAllUser } from "../../services/userService";
import StarRating from "../../components/StartRating";

function Evaluate({ productId }) {
  // if (!product) return <h1>Loading...</h1>;

  const [featuredReviews, setFeaturedReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false); //Open all reviews
  const [allReviews, setAllReviews] = useState([]);
  // useEffect(() => {
  //   setFeaturedReviews([]);
  //   setAverageRating(0);
  //   setTotalReviews(0);
  //   setAllReviews([]);
  //   setLoading(true);
  // }, [productId]);

  useEffect(() => {
    const fechData = async () => {
      try {
        const reviewRes = await getReviewByProductId(productId);
        const userRes = await getAllUser();

        const reviews = (reviewRes?.data || []).filter(
          (r) => Number(r.productId) === Number(productId)
        );
        const users = userRes.data || [];
        // console.log(users);
        if (!reviews.length) {
          setAverageRating(0);
          setTotalReviews(0);
          setFeaturedReviews([]);
          setAllReviews([]);
          setLoading(false);
          return;
        }

        //Comment tương ứng với review
        const reviewsWithUser = reviews.map((review) => {
          const user = users.find((u) => u.id === review.user_id);
          return {
            ...review,
            userName: user ? user.name : "Ẩn danh",
          };
        });

        const avg =
          reviewsWithUser.reduce((sum, r) => sum + Number(r.rating), 0) /
          reviewsWithUser.length;

        setAverageRating(avg.toFixed(1));
        setTotalReviews(reviews.length);
        // console.log("Avg: ", avg);

        const topReviews = [...reviewsWithUser]
          .sort(
            (a, b) =>
              b.rating - a.rating ||
              new Date(b.createdAt) - new Date(a.createdAt),
          )
          .slice(0, 3);
        setFeaturedReviews(topReviews);
        setAllReviews(reviewsWithUser);
        // console.log(response.comments);
        // console.log("Total:", reviews.length);
        // console.log("Reviews:", reviews);
        // console.log("Type:", typeof reviews);
        console.log("ProductId hiện tại:", productId);
        console.log("Review productId:", reviews[0].productId);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fechData();
  }, [productId]);
  return (
    <>
      <div className="gap-4 my-4 boder border mt-10 py-5">
        {/* Rating  */}
        <div>
          {totalReviews === 0 ? (
            <p className="font-bold">Chưa có đánh giá nào</p>
          ) : (
            <>
              <div className="flex justify-center items-end ">
                <h2 className="text-center text-xl font-bold">
                  Đánh giá sản phẩm{" "}
                </h2>
                <div className="flex items-center">
                  (<span> {averageRating}/5</span>
                  <span>
                    {" "}
                    <StarRating rating={Number(averageRating)} />
                  </span>
                  )
                </div>
              </div>
              {/* Comment  */}
              <div className="flex flex-col text-left gap-6 mt-3 mx-3">
                {(showAll ? allReviews : featuredReviews).map((review) => (
                  <div key={review.id} className="">
                    <span className="font-bold">{review.userName}</span>
                    <span className="ml-3">
                      {new Date(review.created_at).toLocaleString("vi-VN", {
                        timeZone: "Asia/Ho_Chi_Minh",
                      })}
                    </span>
                    <StarRating rating={Number(review.rating)} />
                    <p>{review.comment || review.content || ""}</p>
                    <div>
                      {review.image_review &&
                        review.image_review.length > 0 && (
                          <div className="flex gap-3 mt-3">
                            {review.image_review.map((img, index) => (
                              <img
                                key={index}
                                src={img}
                                alt="review"
                                className="w-20 h-20 object-cover rounded border"
                                onClick={() => setSelectedImage(img)}
                              />
                            ))}
                          </div>
                        )}
                    </div>
                    <hr className="mt-3" />
                  </div>
                ))}
              </div>

              {allReviews.length > 3 && (
                <button
                  className="text-right 
                          font-m 
                          hover:text-blue-600 hover:underli
                          ne my-3 border-2 border-black p-1"
                  onClick={() => setShowAll(!showAll)}
                >
                  {!showAll ? "Xem tất cả" : "Thu gọn"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
}
export default Evaluate;
