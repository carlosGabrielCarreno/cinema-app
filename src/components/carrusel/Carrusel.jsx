import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import movie1 from './assets/movie1.png';
import movie2 from './assets/movie2.png';
import movie3 from './assets/movie3.jpg';
import movie4 from './assets/movie4.jpg';
import movie6 from './assets/movie6.jpg';
import movie11 from './assets/movie11.jpg';

import './_carrusel.scss';

export const Carrusel = () => {
  const images = [movie1, movie2, movie3, movie4, movie6, movie11];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectedNewImage = (images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;

      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };
  const previous = () => {
    selectedNewImage(images, false);
  };
  const nextPage = () => {
    selectedNewImage(images);
    console.log(selectedIndex);
  };
  return (
    <div className="container-carrusel">
      <button className="arrow-carrusel left" onClick={previous}>
        <ArrowBackIosNewIcon fontSize="large" />
      </button>
      <button className="arrow-carrusel right" onClick={nextPage}>
        <ArrowForwardIosIcon fontSize="large" />
      </button>
      <img
        className={`image-carrusel ${loaded ? 'loaded' : ''}`}
        onLoad={() => setLoaded(true)}
        src={selectedImage}
        alt=""
      />
    </div>
  );
};
