import { block } from 'million/react';
import Ilustration4 from '../../resources/ilustration1.png';
import twitterIcon from '../../resources/twitter.svg';
import curiousCatIcon from '../../resources/cat.svg';
import '../stylesheets/header.css';

const MainBlock = block(function Main() {
  return (
    <section className='headerContainer w-screen h-screen flex'>
      <article className='headerContent flex flex-col justify-center gap-1 container w-[320px] sm:w-[400px] md:w-[650px]'>
        <div className='headerContent_Container'>
          <header className='headerContent_header flex flex-col justify-center h-[100px]'>
            <div className='flex justify-between'>
              <h1 className='text-4xl px-3'>Ishinoguro</h1>
              <nav className='flex items-center justify-between'>
                <ul className='flex gap-2 mr-2'>
                  <li>
                    <a
                      href='https://twitter.com/ishinoguro'
                      target='_blank'
                      referrerPolicy='no-referrer'
                      rel='noreferrer'
                      className='flex flex-col justify-center items-center w-9 sm:w-10 md:w-12'
                    >
                      <img src={twitterIcon} alt='' title='Twitter' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://curiouscat.live/Ishinoguro'
                      target='_blank'
                      referrerPolicy='no-referrer'
                      rel='noreferrer'
                      className='flex flex-col justify-center items-center w-9 sm:w-10 md:w-12'
                    >
                      <img src={curiousCatIcon} alt='' title='CuriousCat' />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <h2 className='pl-8 sm:pl-10 md:pl-11'>
              Digital Artist, Freelance Illustrator
            </h2>
          </header>

          <hr className='headerContent_hr hr1' />

          <div className='flex flex-col'>
            <div className='aboutMe_Container'>
              <aside className=' md:flex md:justify-center md:items-center'>
                <img
                  src={Ilustration4}
                  alt='Ilustration of a women'
                  className='ilustration4 w-32 max-w-[250px] bg-white'
                />
              </aside>

              <div className='headerContent_aboutMeContainer-content flex flex-col gap-3'>
                <div>
                  <h2>・┆✦ About Me ✦ ┆・</h2>
                  <h3>Ishi • she/her • 20y. • 🇦🇷</h3>
                  <h4>sleepiest soldier fighting the biggest naps 💤</h4>
                </div>
              </div>
            </div>
            <hr className='headerContent_hr' />
            <div>
              <span>
                ⭐Commission status: <em>open!</em>
              </span>{' '}
              <br />
              <span>🎨Clip studio paint 🖌️Wacom One</span> <br />
              <span>✍🏻Big fanartist 🎥I animate sometimes</span> <br />
              <span>🔞I may post suggestive content</span> <br />
              <span></span>
              <span>
                I&apos;m learning to draw the fundamentals in my second twitter
                account
              </span>
            </div>
          </div>

          <nav className='headerContent_nav'>
            <ul className='flex gap-3 mx-4 flex-col text-center justify-evenly flex-shrink flex-1 flex-wrap'>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>Comissions</a>
              </li>
              <li>
                <a href='#'>T.O.S</a>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </section>
  );
});

export default MainBlock;
