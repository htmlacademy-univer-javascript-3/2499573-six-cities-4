import ReviewItem from './review-item.tsx';
import { Reviews } from '../../types/review.ts';
import { PAGINATION } from '../../const/const.ts';

type ReviewList = {
  reviews: Reviews;
};

export default function ReviewsList({ reviews }: ReviewList): JSX.Element {
  return (
    <div>
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews
          .slice()
          .sort((reviewA, reviewB) => {
            const dateA = new Date(reviewA.date).getTime();
            const dateB = new Date(reviewB.date).getTime();
            return dateB - dateA;
          })
          .slice(0, PAGINATION.reviewLimit)
          .map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
      </ul>
    </div>
  );
}
