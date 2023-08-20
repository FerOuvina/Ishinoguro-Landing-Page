import { block } from 'million/react';
import { useState } from 'react';
import { useLocation } from 'wouter';
import '../stylesheets/thankyou.css';

const ThankyouBlock = block(function Thankyou() {
  const [countdown, setCountdown] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();

  countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);

  countdown === 0 && setTimeout(() => setLocation('/'), 500);

  return (
    <div className='flex flex-col justify-center items-center h-screen mainContainer'>
      <div className='flex flex-col justify-center items-center p-2 rounded-lg backdrop-blur-sm min-[480px]:p-10 contentContainer'>
        <h1 className='text-2xl font-bold text-center'>
          Thank you for your message!
        </h1>
        <h2 className='text-xl font-bold text-center'>
          I will get back to you as soon as possible
        </h2>
        <div className='py-2 min-[480px]:text-xl'>
          <p className='text-lg sm:text-xl'>
            Redirecting you to the home page in{' '}
            <span className='countdown sm:text-3xl'>{countdown}</span>{' '}
            seconds...
          </p>
        </div>
      </div>
    </div>
  );
});

export default ThankyouBlock;
