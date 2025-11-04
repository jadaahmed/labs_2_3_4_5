import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const addMovie = () => {
    if (!title.trim()) return;
    const newMovie = { id: Date.now(), title, comment, rating };
    setMovies([...movies, newMovie]);
    setTitle("");
    setComment("");
    setRating(0);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  const renderStars = (count) => "⭐".repeat(count);

  return (
    <div style={{ margin: "30px", fontFamily: "sans-serif" }} className="form">
      <h1>🎥 My Movie Watch List</h1>

      <input
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />

      <label>Rating: </label>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value="0">Select...</option>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <br />

      <button onClick={addMovie}>Add Movie</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id} style={{ marginTop: "10px" }}>
            <strong>{movie.title}</strong> <br />
            Comment: {movie.comment || "No comment"} <br />
            Rating: {renderStars(movie.rating)} <br />
            <button onClick={() => removeMovie(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
