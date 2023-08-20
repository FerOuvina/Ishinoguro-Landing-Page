import { block } from 'million/react';
import { useRef } from 'react';
import '../stylesheets/contactBlock.css';

const ContactBlock = block(function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleClear = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <footer className='px-2 bg-cover lg:bg-contain footerContainer' id='contact'>
      <h1 className='mb-6 text-2xl min-[480px]:text-4xl sm:text-5xl md:text-6xl font-bold text-center'>
        <strong>━ ˖°˖ ☾</strong> C o n t a c t <strong> ˖°˖ ━</strong>
      </h1>

      <form
        className='mx-auto max-w-md footerContainer-form'
        action='https://formsubmit.co/contact@ishinoguro.com.ar'
        method='POST'
      >
        <div className='mb-2'>
          <label htmlFor='name' className='block mb-2 font-bold'>
            Name
          </label>
          <input
            ref={nameRef}
            type='text'
            id='name'
            name='name'
            title='Plase enter your name'
            className='px-3 py-2 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2 font-bold'>
            Email
          </label>
          <input
            ref={emailRef}
            type='email'
            id='email'
            name='email'
            title='Plase enter your email address'
            className='px-3 py-2 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='subject' className='block mb-2 font-bold'>
            Subject
          </label>
          <input
            ref={subjectRef}
            type='text'
            id='subject'
            name='_subject'
            title='Plase enter the subject of your message'
            className='px-3 py-2 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block mb-2 font-bold'>
            Message
          </label>
          <textarea
            ref={messageRef}
            id='message'
            name='message'
            title='Plase enter a message'
            className='px-3 py-2 w-full'
            rows='4'
            required
          />
        </div>

        {/* Disable form captcha */}
        <input type='hidden' name='_captcha' value='false'></input>
        {/* Box template for emails */}
        <input type='hidden' name='_template' value='table'></input>
        {/* Avoid spammers */}
        <input type='text' name='_honey' style='display:none'></input>
        {/* Redirect to a thank you page */}
        <input
          type='hidden'
          name='_next'
          value={`https://ishinoguro.com.ar/thankyou`}
        />

        <div className='flex justify-between'>
          <button
            type='button'
            title='Clear the form'
            onClick={handleClear}
            className='px-4 py-2 font-bold'
          >
            Clear
          </button>
          <button
            type='submit'
            title='Submit the form'
            className='px-4 py-2 font-bold'
          >
            Submit
          </button>
        </div>
      </form>

      <div className='flex justify-between px-2 mt-2 w-full text-xs sm:justify-evenly'>
        <p>Copyright © 2023</p>
        <p>
          Webstie made by{' '}
          <a
            href='https://www.linkedin.com/in/fernando07'
            referrerPolicy='no-referrer'
            className='text-blue-800'
          >
            Ouvi&#x00F1;a Fernando
          </a>
        </p>
      </div>
    </footer>
  );
});

export default ContactBlock;
