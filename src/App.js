import React, { useState, useEffect } from "react";
import { SlideSwiper } from "./Components/Swiper/SlideSwiper";
import "./App.css";
import { SwiperSlide } from "swiper/react";
import Grid from "./Components/Grid/Grid";
import Navbar from "./Components/Navbar/Navbar";
const baseURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=62d4037e79e24c7ac1a326f9f3d3c008";
function App() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  };
  if (!movie.results) return <h1>Loading ...</h1>;
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <SlideSwiper>
          {movie.results.map((obj, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={`https://image.tmdb.org/t/p/w780/${obj.poster_path}`}
                alt={obj.title}
              />
            </SwiperSlide>
          ))}
        </SlideSwiper>
        <Grid />
      </div>
    </div>
  );
}

export default App;
