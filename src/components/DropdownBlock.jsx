import { block } from 'million/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/dropdownBlock.css';

const DropdownBlock = block(function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col mb-4 w-full min-[480px]:break-inside-avoid artwork-containerCard'>
      <button
        className={`dropdown-button font-bold lg:text-lg py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all ${
          isOpen ? '':'rounded-3xl'}`}
        onClick={toggleDropdown}
      >
        {title}
      </button>
      <div
        className={`overflow-y-scroll duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {content.map((item, index) => (
          <section key={index} className='mb-2 dropdown-Container'>
            {item}
          </section>
        ))}
      </div>
    </div>
  );
});

DropdownBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default DropdownBlock;
