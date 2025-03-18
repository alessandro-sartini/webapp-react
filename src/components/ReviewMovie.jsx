export default function ReviewMovie({ review }) {
  return (
    <div key={review.id} className="card">
      <div className="card-title">
        <h1>
          {review.name} <span>valutazione: {review.vote}</span>
        </h1>
      </div>
      <div className="card-body">
        <p>{review.text}</p>
      </div>
    </div>
  );
}
