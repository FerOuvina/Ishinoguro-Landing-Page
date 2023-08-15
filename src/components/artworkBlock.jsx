import { For, block } from 'million/react';
import DropdownBlock from './DropdownBlock';
import closeIcon from '../assets/icons/close.svg';
import iconBustSketch from '../assets/images/gallery/illustration9.png';
import iconBustBaseColor from '../assets/images/gallery/illustration7.png';
import iconBustBaseColor1 from '../assets/images/gallery/illustration5.png';
import iconBustFullRender from '../assets/images/gallery/illustration6.png';
import halfBodySketh from '../assets/images/gallery/illustration4.png';
import halfBodyBaseColor from '../assets/images/gallery/illustration10.png';
import halfBodyBaseColor1 from '../assets/images/gallery/illustration11.png';
import halfBodyFullRender from '../assets/images/gallery/illustration1.png';
import fullBodyFullRender from '../assets/images/gallery/illustration2.png';
import fullBodyFullRender1 from '../assets/images/gallery/illustration3.png';
import dividerPink from '../assets/images/dividerPink.gif';
import '../stylesheets/comissionBlock.css';
import { useState } from 'react';
import { debounce } from 'lodash';

const ArtworkBlock = block(function Artwork() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleClick = (event) => {
    event.target.classList.toggle('fullscreen');
    setFullscreenImage(event.target);
  };

  const handleCloseFullscreen = debounce(() => {
    setFullscreenImage(null);
  }, 100);

  const sections = [
    // {
    //   title: 'Chibis',
    //   content: [
    //     <article key={'halfBody-container'}>
    //       <table className='w-full text-left border-collapse'>
    //         <tbody>
    //           <tr>
    //             <th>Add-on</th>
    //             <th>Price</th>
    //           </tr>
    //           <tr>
    //             <td>Small Prop</td>
    //             <td>$8</td>
    //           </tr>
    //           <tr>
    //             <td>Big Prop/Furniture</td>
    //             <td>$15</td>
    //           </tr>
    //           <tr>
    //             <td>Extra Character</td>
    //             <td>70%</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //       <span>
    //         Background it can be a plain color, a simple pattern or transparent
    //       </span>

    //       <div className='flex justify-center w-full'>
    //         <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
    //       </div>
    //       <h1 className='artwork-title'>Sketch</h1>
    //       <h2 className='artwork-subtitle'>Starts from $10</h2>
    //       <img src={waos} alt='' />

    //       <div className='flex justify-center w-full'>
    //         <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
    //       </div>
    //       <h1 className='artwork-title'>Base Color</h1>
    //       <h2 className='artwork-subtitle'>Starts from $10</h2>
    //       <img src={waos1} alt='' />

    //       <div className='flex justify-center w-full'>
    //         <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
    //       </div>
    //       <h1 className='artwork-title'>Full Render</h1>
    //       <h2 className='artwork-subtitle'>Starts from $10</h2>
    //       <img src={waos2} alt='' />
    //     </article>,
    //   ],
    // },
    {
      title: 'Icon/Bust',
      content: [
        <article key={'halfBody-container-iconBust'} className='options-container'>
          <div className='xl:px-40 table-container'>
            <table className='w-full text-left border-collapse'>
              <tbody>
                <tr>
                  <th>Add-on</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>Small Prop</td>
                  <td>$8</td>
                </tr>
                <tr>
                  <td>Big Prop/Furniture</td>
                  <td>$15</td>
                </tr>
                <tr>
                  <td>Extra Character</td>
                  <td>70%</td>
                </tr>
              </tbody>
            </table>
            <span>
              Background it can be a plain color, a simple pattern or
              transparent
            </span>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center w-full'>
              <img src={dividerPink} alt='Divider' className='w-full' />
            </div>
            <img
              src={iconBustSketch}
              alt='Sketch of a girl'
              className='w-[450px] artwork-img my-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
              onClick={handleClick}
            />
            <div className='artwork-titleSubtitle'>
              <h1 className='artwork-title'>Sketch</h1>
              <h2 className='m-2 sm:my-2 sm:mx-6 md:mx-20 lg:mx-48 xl:mx-72 artwork-subtitle'>
                Starts from $10
              </h2>
            </div>

            <div className='flex flex-col gap-2 justify-center items-center 2xl:flex-row'>
              <img
                src={iconBustBaseColor}
                alt='Base color of a girl'
                className='w-[450px] artwork-img mt-4 2xl:mb-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
                onClick={handleClick}
              />
              <img
                src={iconBustBaseColor1}
                alt='Black and white portrait of a women'
                className='w-[450px] md:h-[450px] artwork-img mb-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
                onClick={handleClick}
              />
            </div>
            <div className='artwork-titleSubtitle'>
              <h1 className='artwork-title'>Base Color</h1>
              <h2 className='m-2 sm:my-2 sm:mx-6 md:mx-20 lg:mx-40 xl:mx-60 artwork-subtitle'>
                Starts from $20
              </h2>
            </div>

            <img
              src={iconBustFullRender}
              alt='Anime styled drawing of a girl'
              className='w-[550px] artwork-img my-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
              onClick={handleClick}
            />
            <div className='artwork-titleSubtitle'>
              <h1 className='artwork-title'>Full Render</h1>
              <h2 className='m-2 sm:my-2 sm:mx-6 md:mx-20 lg:mx-48 xl:mx-72 artwork-subtitle'>
                Starts from $30
              </h2>
            </div>
          </div>
        </article>,
      ],
    },
    {
      title: 'Half Body',
      content: [
        <article key={'halfBody-container-halfBody'}>
          <div className='xl:px-40 table-container'>
            <table className='w-full text-left border-collapse'>
              <tbody>
                <tr>
                  <th>Add-on</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>Small Prop</td>
                  <td>$8</td>
                </tr>
                <tr>
                  <td>Big Prop/Furniture</td>
                  <td>$15</td>
                </tr>
                <tr>
                  <td>Extra Character</td>
                  <td>70%</td>
                </tr>
              </tbody>
            </table>
            <span>
              Background it can be a plain color, a simple pattern or
              transparent
            </span>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center w-full'>
              <img src={dividerPink} alt='Divider' className='w-full' />
            </div>
            <img
              src={halfBodySketh}
              alt='Sketch of a girl on multiple poses'
              className='w-[450px] artwork-img my-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
              onClick={handleClick}
            />
            <div className='artwork-titleSubtitle'>
              <h1 className='artwork-title'>Sketch</h1>
              <h2 className='m-2 sm:my-2 sm:mx-6 md:mx-20 lg:mx-48 xl:mx-72 artwork-subtitle'>
                Starts from $20
              </h2>
            </div>

            <div className='flex flex-col gap-2 justify-center items-center 2xl:flex-row'>
              <img
                src={halfBodyBaseColor}
                alt='Base color of a girl on the bed'
                className='w-[450px] artwork-img mt-4 2xl:mb-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
                onClick={handleClick}
              />
              <img
                src={halfBodyBaseColor1}
                alt='Base color of a girl on the bed with darker light'
                className='w-[450px] artwork-img mb-4 2xl:mt-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
                onClick={handleClick}
              />
            </div>
            <div className='artwork-titleSubtitle'>
              <h1 className='artwork-title'>Base Color</h1>
              <h2 className='m-2 sm:my-2 sm:mx-6 md:mx-20 lg:mx-40 xl:mx-60 artwork-subtitle'>
                Starts from $40
              </h2>
            </div>

            <img
              src={halfBodyFullRender}
              alt='Anime styled drawing of a girl'
              className='w-[450px] artwork-img my-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
              onClick={handleClick}
            />
            <div className='artwork-titleSubtitle'>
              <h1 className='artwork-title'>Full Render</h1>
              <h2 className='m-2 sm:my-2 sm:mx-6 md:mx-20 lg:mx-48 xl:mx-72 artwork-subtitle'>
                Starts from $55
              </h2>
            </div>
          </div>
        </article>,
      ],
    },
    {
      title: 'Full Body',
      content: [
        <article key={'halfBody-container-fullBody'}>
          <div className='xl:px-40 table-container'>
            <table className='w-full text-left border-collapse'>
              <tbody>
                <tr>
                  <th>Add-on</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>Small Prop</td>
                  <td>$8</td>
                </tr>
                <tr>
                  <td>Big Prop/Furniture</td>
                  <td>$15</td>
                </tr>
                <tr>
                  <td>Extra Character</td>
                  <td>70%</td>
                </tr>
              </tbody>
            </table>
            <span>
              Background it can be a plain color, a simple pattern or
              transparent
            </span>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center w-full'>
              <img src={dividerPink} alt='Divider' className='w-full' />
            </div>
            <img
              src={iconBustSketch}
              alt='Sketch of a girl'
              className='w-[450px] artwork-img my-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
              onClick={handleClick}
            />
            <div className='artwork-titleSubtitle'>
              <h1 className='artwork-title'>Sketch</h1>
              <h2 className='m-2 sm:my-2 sm:mx-6 md:mx-20 lg:mx-48 xl:mx-72 artwork-subtitle'>
                Starts from $10
              </h2>
            </div>

            <div className='flex flex-col gap-2 justify-center items-center 2xl:flex-row'>
              <img
                src={iconBustBaseColor}
                alt='Base color of a girl'
                className='w-[450px] artwork-img mt-4 2xl:mt-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
                onClick={handleClick}
              />
              <img
                src={iconBustBaseColor1}
                alt='Black and white portrait of a women'
                className='w-[450px] md:h-[450px] artwork-img mb-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
                onClick={handleClick}
              />
            </div>
            <div className='artwork-titleSubtitle'>
              <h1 className='artwork-title'>Base Color</h1>
              <h2 className='m-2 sm:my-2 sm:mx-6 md:mx-20 lg:mx-40 xl:mx-60 artwork-subtitle'>
                Starts from $20
              </h2>
            </div>

            <div className='flex flex-col gap-2 justify-center items-center 2xl:flex-row'>
              <img
                src={fullBodyFullRender}
                alt='a drawing of a smilling, anime styled girl sitting on a couch'
                className='w-[450px] artwork-img mt-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
                onClick={handleClick}
              />
              <img
                src={fullBodyFullRender1}
                alt='a drawing of a standing goth, anime styled girl'
                className='w-[450px] artwork-img mb-4 2xl:mt-4 md:hover:scale-[1.02] md:transition-all md:duration-300 md:ease-in-out'
                onClick={handleClick}
              />
            </div>
            <div className='artwork-titleSubtitle'>
              <h1 className='artwork-title'>Full Render</h1>
              <h2 className='m-2 sm:my-2 sm:mx-6 md:mx-20 lg:mx-48 xl:mx-72 artwork-subtitle'>
                Starts from $30
              </h2>
            </div>
          </div>
        </article>,
      ],
    },
  ];
  return (
    <>
      <h1 className='w-full text-2xl min-[480px]:text-3xl md:text-5xl text-[#524f50] bg-[#C3B3C3] py-4 text-center'>
        <strong>₊✩°｡</strong> O p t i o n s <strong>｡°✩₊</strong>
      </h1>
      <div className='flex flex-col px-4 mt-4 w-full artwork-container md:px-20 lg:px-32 xl:px-72 2xl:px-80'>
        <For each={sections} memo>
          {(section, index) => (
            <DropdownBlock
              key={index}
              title={section.title}
              content={section.content}
            />
          )}
        </For>
      </div>
      {fullscreenImage !== null && (
        <div className='fullscreen-overlay'>
          <img
            src={fullscreenImage.src}
            alt='Fullscreen Image'
            className='fullscreen-image'
          />
          <img
            src={closeIcon}
            alt='Close Icon'
            className='w-12 cursor-pointer'
            onClick={handleCloseFullscreen}
          />
        </div>
      )}
    </>
  );
});

export default ArtworkBlock;
