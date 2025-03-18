export default function ReviewMovie({ review }) {
  return (
    <div className="col ">
      <div key={review.id} className="card my-2">
        <div className="card-title ">
          <h3 className="m-3">
            {review.name} <span>valutazione: {review.vote}</span>
          </h3>
        </div>
        <div className="card-body">
          <p>{review.text}</p>
        </div>
      </div>
    </div>
  );
}
