import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ReviewAddForm() {
  const server_url = import.meta.env.VITE_URL_API_FILMS;

  const { id } = useParams();
  const [text, setText] = useState("");
  const [vote, setVote] = useState(undefined);
  const [name, setName] = useState("");
  // const [body, setBody] = useState({
  //   movie_id: id,
  //   name: name,
  //   vote: vote,
  //   text: text,
  // });

  const reviewData = {
    movie_id: id,
    name,
    vote,
    text,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  };

  async function fetchReview() {

    const data = await fetch(server_url + "/reviews", options);

    const update = await reviewData;
    console.log(update);
    return await data.json();
  }
  // try {

  // } catch (err) {
  //   console.error(err);
  // }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Lascia una recensione</h3>
      <form onSubmit={() => fetchReview()}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Il tuo nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reviewText" className="form-label">
            Recensione
          </label>
          <textarea
            id="reviewText"
            className="form-control"
            placeholder="Scrivi la tua recensione..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="4"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vote" className="form-label">
            Voto
          </label>
          <select
            id="vote"
            className="form-select"
            value={vote}
            onChange={(e) => setVote(e.target.value)}
            required
          >
            <option value="">Seleziona un voto</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="btn
        btn-primary"
        >
          Invia
        </button>
      </form>
    </div>
  );
}
