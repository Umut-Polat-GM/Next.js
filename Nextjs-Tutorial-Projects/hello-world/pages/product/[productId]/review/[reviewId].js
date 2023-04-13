import { useRouter } from "next/router";

function Review() {
  const router = useRouter();

  const { productId, reviewId } = router.query;

  return (
    <div>
      <h1>
        productId: {productId} for reviewId: {reviewId}
      </h1>
    </div>
  );
}

export default Review;
