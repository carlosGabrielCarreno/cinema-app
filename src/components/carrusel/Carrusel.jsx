import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './_carrusel.scss';

export const Carrusel = () => {
  const images = [
    'movie1.png',
    'movie2.png',
    'movie3.jpg',
    'movie4.jpg',
    'movie6.jpg',
    'movie11.jpg',
  ];
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
        src={`/src/assets/${selectedImage}`}
        alt=""
      />
    </div>
  );
};
