import { For, block } from 'million/react';
import DropdownBlock from './dropdownBlock';
import waos from '../assets/images/gallery/illustration2.png';
import waos1 from '../assets/images/gallery/illustration4.png';
import waos2 from '../assets/images/gallery/illustration6.png';
import dividerPink from '../assets/images/dividerPink.gif';
import '../stylesheets/comissionBlock.css';

const ArtworkBlock = block(function Artwork() {
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
        <article key={'halfBody-container'}>
          <div>
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

          <div className='flex justify-center w-full'>
            <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
          </div>
          <h1 className='artwork-title'>Sketch</h1>
          <h2 className='artwork-subtitle'>Starts from $10</h2>
          <img src={waos} alt='' />

          <div className='flex justify-center w-full'>
            <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
          </div>
          <h1 className='artwork-title'>Base Color</h1>
          <h2 className='artwork-subtitle'>Starts from $10</h2>
          <img src={waos1} alt='' />

          <div className='flex justify-center w-full'>
            <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
          </div>
          <h1 className='artwork-title'>Full Render</h1>
          <h2 className='artwork-subtitle'>Starts from $10</h2>
          <img src={waos2} alt='' />
        </article>,
      ],
    },
    {
      title: 'Half Body',
      content: [
        <article key={'halfBody-container'}>
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
              <tr>
                <td>Animals/Pets</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>Background</td>
                <td>90%</td>
              </tr>
            </tbody>
          </table>

          <div className='flex justify-center w-full'>
            <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
          </div>
          <h1 className='artwork-title'>Sketch</h1>
          <h2 className='artwork-subtitle'>Starts from $10</h2>
          <img src={waos} alt='' />

          <div className='flex justify-center w-full'>
            <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
          </div>
          <h1 className='artwork-title'>Base Color</h1>
          <h2 className='artwork-subtitle'>Starts from $10</h2>
          <img src={waos1} alt='' />

          <div className='flex justify-center w-full'>
            <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
          </div>
          <h1 className='artwork-title'>Full Render</h1>
          <h2 className='artwork-subtitle'>Starts from $10</h2>
          <img src={waos2} alt='' />
        </article>,
      ],
    },
    {
      title: 'Full Body',
      content: [
        <article key={'halfBody-container'}>
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
              <tr>
                <td>Animals/Pets</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>Background</td>
                <td>90%</td>
              </tr>
            </tbody>
          </table>

          <div className='flex justify-center w-full'>
            <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
          </div>
          <h1 className='artwork-title'>Sketch</h1>
          <h2 className='artwork-subtitle'>Starts from $10</h2>
          <img src={waos} alt='' />

          <div className='flex justify-center w-full'>
            <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
          </div>
          <h1 className='artwork-title'>Base Color</h1>
          <h2 className='artwork-subtitle'>Starts from $10</h2>
          <img src={waos1} alt='' />

          <div className='flex justify-center w-full'>
            <img src={dividerPink} alt='Divider' className='mb-2 w-full' />
          </div>
          <h1 className='artwork-title'>Full Render</h1>
          <h2 className='artwork-subtitle'>Starts from $10</h2>
          <img src={waos2} alt='' />
        </article>,
      ],
    },
  ];
  return (
    <>
      <h1 className='w-full text-2xl min-[480px]:text-3xl md:text-5xl text-[#524f50] bg-white py-4 text-center'>
        <strong>━ ˖°˖ ☾</strong> O p t i o n s <strong> ˖°˖ ━</strong>
      </h1>
      <div className='flex flex-col px-4 mt-4 w-full artwork-container md:px-20 lg:px-32'>
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
    </>
  );
});

export default ArtworkBlock;
