import { block } from 'million/react';
import { debounce } from 'lodash';
import { useRef, useState } from 'react';
import illustration1 from '../assets/images/gallery/illustration1.png';
import illustration2 from '../assets/images/gallery/illustration2.png';
import illustration3 from '../assets/images/gallery/illustration3.png';
import illustration4 from '../assets/images/gallery/illustration4.png';
import illustration5 from '../assets/images/gallery/illustration5.png';
import illustration6 from '../assets/images/gallery/illustration6.png';
import illustration7 from '../assets/images/gallery/illustration7.png';
import illustration8 from '../assets/images/gallery/illustration8.png';
import closeIcon from '../assets/icons/close.svg';
import prevIcon from '../assets/icons/previous.svg';
import nextIcon from '../assets/icons/next.svg';
import '../stylesheets/galleryBlock.css';

const GalleryBlock = block(function Gallery() {
  const images = [
    illustration2,
    illustration4,
    illustration5,
    illustration6,
    illustration1,
    illustration7,
    illustration3,
    illustration8,
  ];

  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);

  const handleImageClick = debounce((index) => {
    setFullscreenImageIndex(index);
  }, 100);

  const handleCloseFullscreen = debounce(() => {
    setFullscreenImageIndex(null);
  }, 100);

  const showPreviousImage = () => {
    if (fullscreenImageIndex !== null) {
      setFullscreenImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const showNextImage = () => {
    if (fullscreenImageIndex !== null) {
      setFullscreenImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const imageRefs = useRef([]);

  return (
    <section className='h-full galleryContainer'>
      <div
        className='py-10 w-full text-3xl min-[480px]:text-5xl text-center md:text-6xl galleryContainer-separator'
        id='gallery'
      >
        <strong>━ ˖°˖ ☾</strong> G a l l e r y <strong> ˖°˖ ━</strong>
      </div>
      <article>
        <ul className='galleryContainer-list columns-1 min-[568px]:columns-2 sm:columns-3 px-6 my-8 lg:px-60'>
          {images.map((image, index) => (
            <li
              className={`galleryContainer-list-item md:hover:scale-110 md:transition-all md:duration-300 md:ease-in-out ${
                fullscreenImageIndex === index ? 'fullscreen' : ''
              }`}
              key={index}
              onClick={() => handleImageClick(index)}
            >
              <img
                ref={(element) => (imageRefs.current[index] = element)}
                src={image}
                alt='Gallery Image'
                className='cursor-pointer galleryContainer-list-itemImg'
              />
            </li>
          ))}
        </ul>
        {fullscreenImageIndex !== null && (
          <div className='fullscreen-overlay'>
            <img
              src={images[fullscreenImageIndex]}
              alt='Fullscreen Image'
              className='fullscreen-image'
            />

            <div className='flex justify-between items-center mt-4 w-52'>
              <button onClick={showPreviousImage}>
                <img src={prevIcon} alt='Previous Icon' className='w-10' />
              </button>
              <img
                src={closeIcon}
                alt='Close Icon'
                className='w-12 cursor-pointer'
                onClick={handleCloseFullscreen}
              />
              <button onClick={showNextImage}>
                <img src={nextIcon} alt='Next Icon' className='w-10' />
              </button>
            </div>
          </div>
        )}
      </article>
    </section>
  );
});

export default GalleryBlock;
