import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AddMoviePage() {


  const initialData = {
    title: "",
    director: "",
    genre: "",
    image: null,
    abstract: "",
    imageName: "",
  };

     const [formData, setFormData] = useState(initialData);
    

  const navigate = useNavigate();
  const setFieldValue = (e) => {
    const { name, value } = e.target;

    if (name === "image") {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

    function handleSubmit(e) {
      
    e.preventDefault();
    axios
      .post("http://localhost:3000/movies", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-3">Movie Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={setFieldValue}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Director</label>
            <input
              type="text"
              className="form-control"
              name="director"
              onChange={setFieldValue}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Genre</label>
            <input
              type="text"
              className="form-control"
              name="genre"
              onChange={setFieldValue}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Release Year</label>
            <input
              type="number"
              className="form-control"
              name="releaseYearNumber"
              onChange={setFieldValue}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Abstract</label>
            <textarea
              className="form-control"
              name="abstract"
              onChange={setFieldValue}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image Name</label>
            <input
              type="file"
              className="form-control"
              name="image"
              required
              onChange={setFieldValue}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
