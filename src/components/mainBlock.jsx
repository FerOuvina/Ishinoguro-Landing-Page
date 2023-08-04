import { block } from 'million/react';
import Ilustration4 from '../../resources/ilustration1.png';
import twitterIcon from '../../resources/twitter.svg';
import curiousCatIcon from '../../resources/cat.svg';
import '../stylesheets/header.css';

const MainBlock = block(function Main() {
  return (
    <section className='headerContainer'>
      <article className='headerContent'>
        <div className='headerContent_Container'>
          <header className='headerContent_header'>
            <div className='headerContent_header-title'>
              <h1>♡ ISHINOGURO ♡</h1>
            </div>
            <h2 className='headerContent_header-sub'>
             Freelance illustrator ˗ˏˋ ★ ˎˊ˗ character designer
            </h2>
          </header>

          <hr className='headerContent_hr hr1' />

          <div className='headerContent_aboutMeContainer'>
            <aside className='headerContent_aboutMeContainer-illustration'>
              <img src={Ilustration4} alt='waos' />
            </aside>

            <div className='headerContent_aboutMeContainer-content'>
              <div>
                <h2>₊˚⊹♡ About Me ♡₊˚⊹</h2>
                <h3>── ★ Ishi • she/her • 20y. • 🇦🇷 ★ ──</h3>
                <h4>Sleepiest soldier fighting the biggest naps💤</h4>
                <span></span> <br />
                <span></span> <br />
                <span>
                </span>
              </div>

              <hr className='headerContent_hr' />

              <div>
                <span>
                  ⭐Commission status: <em>open!</em>
                </span>{' '}
                <br />
                <br />
                <span>✍🏻 What I use . . </span> <br />
                <span>🎨Clip studio paint 🖌️ Wacom One</span> <br />
                <br />
                <span>✍🏻 Where find me? . . </span> <br />
                <span></span> <br />
                <nav className='headerContent_aboutMeContainer-nav'>
                <ul>
                  <li>
                    <a
                      href='https://twitter.com/ishinoguro'
                      target='_blank'
                      referrerPolicy='no-referrer'
                      rel='noreferrer'
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
                    >
                      <img src={curiousCatIcon} alt='' title='CuriousCat' />
                    </a>
                  </li>
                </ul>
              </nav>

              </div>
            </div>
          </div>

          <nav className='headerContent_nav'>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Portfolio</a>
              </li>
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
