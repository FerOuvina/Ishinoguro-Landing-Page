import { block } from 'million/react';
import ilustration2 from '../assets/images/ilustration2.png';
import dividerRibbon from '../assets/images/dividerRibbon.gif';
import dividerHearts from '../assets/images/dividerHearts.gif';
import twitterIcon from '../assets/icons/twitter.svg';
import askIcon from '../assets/icons/ask.svg';
import tikTokIcon from '../assets/icons/tiktok.svg';
import tumblrIcon from '../assets/icons/tumblr.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import '../stylesheets/mainBlock.css';

const MainBlock = block(function Main() {
  return (
    <section className='flex justify-center items-center w-screen h-screen headerContainer'>
      <article className='flex flex-col justify-center w-[320px] sm:w-[400px] min-[568px]:w-[400px] lg:relative lg:right-40 xl:right-56 2xl:right-72'>
        <div className='relative p-2 headerContent_Container'>
          <header className='flex flex-col justify-center headerContent_header text-[#390a0a]'>
            <div className='flex justify-center items-center'>
              <img
                src={ilustration2}
                alt='Ilustrator Portrait'
                className='w-16 md:w-32'
              />
            </div>
            <h1 className='w-full text-2xl font-bold text-center'>
              ♡ I s h i n o g u r o ♡
            </h1>
            <em className='text-lg font-bold text-center'>Freelance artist</em>
            <div className='flex flex-col justify-center items-center text-center'>
              <h3 className='md:text-lg'>Ishi | 20 | she･her | en.es</h3>
              <h4 className='md:text-lg'>
                Sleepiest soldier fighting the biggest naps
              </h4>
            </div>
          </header>

          <div className='flex flex-col justify-center items-center headerContent_Container-desc'>
            <div className='flex'>
              <img
                src={dividerRibbon}
                alt='Divider Ribbon Gif'
                className='w-full sm:w-3/6'
              />
              <img
                src={dividerRibbon}
                alt='Divider Ribbon Gif'
                className='hidden sm:block sm:w-3/6'
              />
            </div>
            <span className='mt-1 text-md'>
              ⭐ Commission status:{' '}
              <em className='text-md font-bold text-[#0b0b0b]'>open!</em>
            </span>{' '}
            <a
              href='mailto:contactishinoguro@gmail.com'
              className='font-bold text-[#841b6c] pl-[26px] min-[568px]:pl-0'
            >
              <span className='text-black'>• </span>contact@ishinoguro.com.ar
            </a>
            <span className='text-md'>• Discord: Ishinoguro #6893</span>{' '}
            <span className='mb-1 text-md'>✍🏻 You can find me on . . .</span>
            <nav className='my-1 headerContent_Container-descNav'>
              <ul className='flex gap-2 justify-evenly md:justify-center md:gap-6'>
                <li>
                  <a
                    href='https://twitter.com/ishinoguro'
                    target='_blank'
                    referrerPolicy='no-referrer'
                    rel='noreferrer'
                    className='flex flex-col justify-center items-center'
                  >
                    <img
                      src={twitterIcon}
                      alt='Twitter Icon'
                      title='Twitter'
                      className='w-8'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://curiouscat.live/Ishinoguro'
                    target='_blank'
                    referrerPolicy='no-referrer'
                    rel='noreferrer'
                    className='flex flex-col justify-center items-center'
                  >
                    <img
                      src={askIcon}
                      alt='Ask Icon'
                      title='Ask me anything'
                      className='w-8'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://ishinoguro.tumblr.com/'
                    target='_blank'
                    referrerPolicy='no-referrer'
                    rel='noreferrer'
                    className='flex flex-col justify-center items-center'
                  >
                    <img
                      src={tumblrIcon}
                      alt='Tumblr Icon'
                      title='Tumblr'
                      className='w-8'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.tiktok.com/@ishinoguro'
                    target='_blank'
                    referrerPolicy='no-referrer'
                    rel='noreferrer'
                    className='flex flex-col justify-center items-center'
                  >
                    <img
                      src={tikTokIcon}
                      alt='Tiktok Icon'
                      title='TikTok'
                      className='w-8'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/ishinoguro/'
                    target='_blank'
                    referrerPolicy='no-referrer'
                    rel='noreferrer'
                    className='flex flex-col justify-center items-center'
                  >
                    <img
                      src={instagramIcon}
                      alt='Instagram Icon'
                      title='Instagram'
                      className='w-8'
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <nav className='headerContent_Container-nav'>
            <ul className='flex flex-col gap-2 justify-center items-center w-full md:mb-1 md:flex-row md:mt-1'>
              <li className='w-full'>
                <a href='#' className='block p-1 w-full text-center md:p-[5px]'>
                  Contact
                </a>
              </li>
              <li className='w-full'>
                <a href='#' className='block p-1 w-full text-center md:p-[5px]'>
                  Comissions
                </a>
              </li>
              <li className='w-full'>
                <a href='#' className='block p-1 w-full text-center md:p-[5px]'>
                  T.O.S
                </a>
              </li>
            </ul>
            <li className='flex w-full'>
              <img
                src={dividerHearts}
                alt='Divider Hearts Gif'
                className='block w-full h-8 md:h-auto'
              />
            </li>
          </nav>
        </div>
      </article>
    </section>
  );
});

export default MainBlock;
