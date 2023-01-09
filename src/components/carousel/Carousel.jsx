import { useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './_carousel.scss';

export const Carousel = () => {
  const images = [
    'movie1.jpg',
    'movie2.jpg',
    'movie3.jpg',
    'movie4.jpg',
    'movie5.jpg',
    'movie6.png',
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
    <div className="container-carousel">
      <button onClick={previous}>
        <ArrowLeftIcon fontSize="large" />
      </button>
      <button onClick={nextPage}>
        <ArrowRightIcon fontSize="large" />
      </button>
      <img
        className={`image-carousel ${loaded ? 'loaded' : ''}`}
        onLoad={() => setLoaded(true)}
        src={`/src/assets/${selectedImage}`}
        alt=""
      />
    </div>
  );
};
