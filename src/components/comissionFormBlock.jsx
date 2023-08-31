import { block } from 'million/react';
import { useRef, useState } from 'react';
import '../stylesheets/commissionFormBlock.css';

const CommissionFormBlock = block(function ComissionForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const discordRef = useRef(null);
  const chibiRef = useRef(null);
  const iconBustRef = useRef(null);
  const halfBodyRef = useRef(null);
  const fullBodyRef = useRef(null);
  const sketchRef = useRef(null);
  const baseColorRef = useRef(null);
  const fullRenderRef = useRef(null);
  const multimediaMessageRef = useRef(null);
  const extraCharacterRef = useRef(null);
  const smallPropRef = useRef(null);
  const bigPropRef = useRef(null);
  const detailedBackgroundRef = useRef(null);
  const animalPetRef = useRef(null);
  const hardDeadlineRef = useRef(null);

  const inputRefs = {
    name: nameRef,
    email: emailRef,
    discord: discordRef,
    chibi: chibiRef,
    iconBust: iconBustRef,
    halfBody: halfBodyRef,
    fullBody: fullBodyRef,
    sketch: sketchRef,
    baseColor: baseColorRef,
    fullRender: fullRenderRef,
    multimediaMessage: multimediaMessageRef,
  };

  const [sections, setSections] = useState({
    showExtraCharacter: false,
    showSmallProp: false,
    showBigProp: false,
    showDetailedBackground: false,
    showAnimalPet: false,
    showHardDeadline: false,
  });

  const [attachmentFileNames, setAttachmentFileNames] = useState({
    extraCharacter: '',
    smallProp: '',
    bigProp: '',
    detailedBackground: '',
    animalPet: '',
    multimediaAttachment: '',
  });

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const clearInputFields = () => {
    Object.values(inputRefs).forEach((ref) => {
      if (ref.current) {
        ref.current.value = '';
        if (ref.current.innerHTML) {
          ref.current.innerHTML = '';
        }
      }
    });

    for (const checkboxChecked of document.querySelectorAll('.myCheckbox')) {
      checkboxChecked.checked = false;
    }

    for (const radioChecked of document.querySelectorAll('.radioOptions')) {
      radioChecked.checked = false;
    }

    setSections({
      showExtraCharacter: false,
      showSmallProp: false,
      showBigProp: false,
      showDetailedBackground: false,
      showAnimalPet: false,
      showHardDeadline: false,
    });

    setAttachmentFileNames({
      extraCharacter: '',
      smallProp: '',
      bigProp: '',
      detailedBackground: '',
      animalPet: '',
      multimediaAttachment: '',
    });

    setEstimatedPrice(0);
  };

  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const calculateEstimatedPrice = () => {
    let basePrice = 0;

    // Calculate base price based on selected radio buttons
    if (iconBustRef.current.checked && sketchRef.current.checked) {
      basePrice += 5;
    } else if (iconBustRef.current.checked && baseColorRef.current.checked) {
      basePrice += 10;
    } else if (iconBustRef.current.checked && fullRenderRef.current.checked) {
      basePrice += 20;
    }

    if (halfBodyRef.current.checked && sketchRef.current.checked) {
      basePrice += 10;
    } else if (halfBodyRef.current.checked && baseColorRef.current.checked) {
      basePrice += 20;
    } else if (halfBodyRef.current.checked && fullRenderRef.current.checked) {
      basePrice += 30;
    }

    if (fullBodyRef.current.checked && sketchRef.current.checked) {
      basePrice += 20;
    } else if (fullBodyRef.current.checked && baseColorRef.current.checked) {
      basePrice += 30;
    } else if (fullBodyRef.current.checked && fullRenderRef.current.checked) {
      basePrice += 40;
    }

    // Calculate additional charges based on checkboxes
    extraCharacterRef.current.checked ? (basePrice *= 1.7) : null;
    smallPropRef.current.checked ? (basePrice += 8) : null;
    bigPropRef.current.checked ? (basePrice += 15) : null;
    detailedBackgroundRef.current.checked ? (basePrice *= 1.9) : null;
    animalPetRef.current.checked ? (basePrice *= 1.75) : null;
    hardDeadlineRef.current.checked ? (basePrice *= 1.5) : null;

    return basePrice.toFixed(2); // Convert to 2 decimal places
  };

  const handleInputChange = (ref, sectionName) => {
    if (ref.current) {
      ref.current.innerHTML = ref.current.value;
    }
    toggleSection(sectionName);
    setEstimatedPrice(calculateEstimatedPrice());
  };

  return (
    <div className='flex flex-col justify-center items-center mt-2 w-full'>
      <h1 className='mb-6 text-2xl w-full bg-[#C3B3C3] py-2 text-[#524f50] min-[480px]:text-4xl sm:text-5xl md:text-6xl font-bold text-center'>
        <strong className='hidden text-xl sm:inline sm:text-3xl md:text-4xl lg:text-6xl'>
          ✯¸.•
        </strong>{' '}
        C o m i s s i o n F o r m{' '}
        <strong className='hidden text-xl sm:inline sm:text-3xl md:text-4xl lg:text-6xl'>
          •.¸✯
        </strong>
      </h1>
      <div className='px-4 py-2 w-full min-[480px]:max-w-md md:max-w-[600px] formContainer'>
        <form
          action='https://formsubmit.co/contact@ishinoguro.com.ar'
          method='POST'
          encType='multipart/form-data'
        >
          <label htmlFor='name' className='text-xl font-semibold'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            ref={nameRef}
            className='p-2 mb-1 w-full rounded border'
            required
          />

          <label htmlFor='email' className='text-xl font-semibold'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            ref={emailRef}
            className='p-2 mb-1 w-full rounded border'
            required
          />

          <label htmlFor='discord' className='text-xl font-semibold'>
            Discord
          </label>
          <input
            type='text'
            id='discord'
            name='discord'
            ref={discordRef}
            className='p-2 w-full rounded bpy-er'
          />

          <div className='flex gap-2 justify-center items-center sm:flex-col'>
            <div className='flex flex-col items-center mt-2 w-full bg-white rounded-lg sm:justify-between md:items-center sm:px-2 md:px-4 sm:flex-row'>
              {/* <label htmlFor='chibi' className='font-bold sm:py-1 md:text-xl'>
                <input
                  type='radio'
                  name='comission'
                  id='chibi'
                  ref={chibiRef}
                  className='radioOptions'
                  value='Chibi'
                  required
                  onChange={() => handleInputChange(chibiRef, 'showChibi')}
                />{' '}
                Chibi
              </label> */}

              <label
                htmlFor='iconBust'
                className='font-bold sm:py-1 md:text-xl'
              >
                <input
                  type='radio'
                  name='comission'
                  id='iconBust'
                  ref={iconBustRef}
                  className='radioOptions'
                  value='Icon/Bust'
                  required
                  onChange={() =>
                    handleInputChange(iconBustRef, 'showIconBust')
                  }
                />{' '}
                Icon/Bust
              </label>

              <label
                htmlFor='halfBody'
                className='font-bold sm:py-1 md:text-xl'
              >
                <input
                  type='radio'
                  name='comission'
                  id='halfBody'
                  ref={halfBodyRef}
                  className='radioOptions'
                  value='Half Body'
                  required
                  onChange={() =>
                    handleInputChange(halfBodyRef, 'showHalfBody')
                  }
                />{' '}
                Half Body
              </label>

              <label
                htmlFor='fullBody'
                className='font-bold sm:py-1 md:text-xl'
              >
                <input
                  type='radio'
                  name='comission'
                  id='fullBody'
                  ref={fullBodyRef}
                  className='radioOptions'
                  value='Full Body'
                  required
                  onChange={() =>
                    handleInputChange(fullBodyRef, 'showFullBody')
                  }
                />{' '}
                Full Body
              </label>
            </div>

            <div className='flex flex-col items-center mt-2 w-full bg-white rounded-lg md:justify-evenly md:items-center sm:justify-evenly sm:flex-row'>
              <label htmlFor='sketch' className='font-bold sm:py-1 md:text-xl'>
                <input
                  type='radio'
                  name='comissionType'
                  id='sketch'
                  ref={sketchRef}
                  className='radioOptions'
                  value='Sketch'
                  required
                  onChange={() => handleInputChange(sketchRef, 'showSketch')}
                />{' '}
                Sketch
              </label>

              <label
                htmlFor='baseColor'
                className='font-bold sm:py-1 md:text-xl'
              >
                <input
                  type='radio'
                  name='comissionType'
                  id='baseColor'
                  ref={baseColorRef}
                  className='radioOptions'
                  value='Base Color'
                  required
                  onChange={() =>
                    handleInputChange(baseColorRef, 'showBaseColor')
                  }
                />{' '}
                Base Color
              </label>

              <label
                htmlFor='fullRender'
                className='font-bold sm:py-1 md:text-xl'
              >
                <input
                  type='radio'
                  name='comissionType'
                  id='fullRender'
                  ref={fullRenderRef}
                  className='radioOptions'
                  value='Full Render'
                  required
                  onChange={() =>
                    handleInputChange(fullRenderRef, 'showFullRender')
                  }
                />{' '}
                Full Render
              </label>
            </div>
          </div>

          <label
            htmlFor='estimatedPrice'
            className='flex justify-center mt-1 text-xl font-bold'
          >
            <input
              type='text'
              name='estimatedPrice'
              id='estimatedPrice'
              className='hidden'
              value={`Estimated Price: $${estimatedPrice}`}
            />
            Estimated Price<span>: ${estimatedPrice}</span>
          </label>

          <hr className='mt-2 border-2' />

          <div className='my-2'>
            {/* Extra character checkbox */}
            <div className='my-2'>
              <input
                type='checkbox'
                className='myCheckbox'
                id='extraCharacter'
                ref={extraCharacterRef}
                onChange={() => {
                  toggleSection('showExtraCharacter');
                  handleInputChange(extraCharacterRef, 'extraCharacterPrice');
                }}
              />
              <label htmlFor='extraCharacter' className='font-semibold'>
                {' '}
                Does your commission have an extra character? +70% of the total
                price
              </label>
              {sections.showExtraCharacter && (
                <div className='flex flex-col gap-2'>
                  <small>
                    ✦ describe the extra character and/or submit file references
                  </small>
                  <textarea
                    className='p-1 w-full rounded border'
                    name='extraCharacterMessage'
                  />
                  <label
                    htmlFor='extraCharacterFile'
                    className='w-fit filesLabel'
                  >
                    <input
                      type='file'
                      name='extraCharacterFile'
                      id='extraCharacterFile'
                      required
                      accept='image/png, image/jpeg'
                      onChange={(event) => {
                        setAttachmentFileNames((prevFileNames) => ({
                          ...prevFileNames,
                          extraCharacter: event.target.files[0]?.name || '',
                        }));
                      }}
                    />
                    Upload files...
                  </label>
                  <span id='extraCharacterAttachment'>
                    {attachmentFileNames.extraCharacter}
                  </span>
                </div>
              )}
            </div>

            {/* Small prop checkbox */}
            <div className='my-2'>
              <input
                type='checkbox'
                className='myCheckbox'
                id='smallProp'
                ref={smallPropRef}
                onChange={() => {
                  toggleSection('showSmallProp');
                  handleInputChange(smallPropRef, 'smallPropPrice');
                }}
              />
              <label htmlFor='smallProp' className='font-semibold'>
                {' '}
                Does your commission have a small prop? +$8 to the total price
              </label>
              {sections.showSmallProp && (
                <div className='flex flex-col gap-2'>
                  <small>
                    ✦ describe the small prop or submit file references
                  </small>
                  <textarea
                    className='p-1 w-full rounded border'
                    name='smallPropMessage'
                  />
                  <label htmlFor='smallPropFile' className='w-fit filesLabel'>
                    <input
                      type='file'
                      name='smallPropFile'
                      id='smallPropFile'
                      accept='image/png, image/jpeg'
                      required
                      onChange={(event) => {
                        setAttachmentFileNames((prevFileNames) => ({
                          ...prevFileNames,
                          smallProp: event.target.files[0]?.name || '',
                        }));
                      }}
                    />
                    Upload files...
                  </label>
                  <span id='smallPropAttachment'>
                    {attachmentFileNames.smallProp}
                  </span>
                </div>
              )}
            </div>

            {/* Big prop checkbox */}
            <div className='my-2'>
              <input
                type='checkbox'
                className='myCheckbox'
                id='bigProp'
                ref={bigPropRef}
                onChange={() => {
                  toggleSection('showBigProp');
                  handleInputChange(bigPropRef, 'bigPropPrice');
                }}
              />
              <label htmlFor='bigProp' className='font-semibold'>
                {' '}
                Does your commission have a big prop/furniture? +$15 to the
                total price
              </label>
              {sections.showBigProp && (
                <div className='flex flex-col gap-2'>
                  <small>
                    ✦ describe the big prop/furniture or submit file references{' '}
                  </small>
                  <textarea
                    className='p-1 w-full rounded border'
                    name='bigPropMessage'
                  />
                  <label htmlFor='bigPropFile' className='w-fit filesLabel'>
                    <input
                      type='file'
                      name='bigPropFile'
                      id='bigPropFile'
                      accept='image/png, image/jpeg'
                      required
                      onChange={(event) => {
                        setAttachmentFileNames((prevFileNames) => ({
                          ...prevFileNames,
                          bigProp: event.target.files[0]?.name || '',
                        }));
                      }}
                    />
                    Upload files...
                  </label>
                  <span id='bigPropAttachment'>
                    {attachmentFileNames.bigProp}
                  </span>
                </div>
              )}
            </div>

            {/* Detailed background checkbox */}
            <div className='my-2'>
              <input
                type='checkbox'
                className='myCheckbox'
                id='detailedBackground'
                ref={detailedBackgroundRef}
                onChange={() => {
                  toggleSection('showDetailedBackground');
                  handleInputChange(
                    detailedBackgroundRef,
                    'detailedBackgroundPrice'
                  );
                }}
              />
              <label htmlFor='detailedBackground' className='font-semibold'>
                {' '}
                Does your commission have a detailed background? +90% to the
                total price
              </label>
              {sections.showDetailedBackground && (
                <div className='flex flex-col gap-2'>
                  <small>
                    ✦ describe the background or submit file references{' '}
                  </small>
                  <textarea
                    className='p-1 w-full rounded border'
                    name='backgroundMessage'
                  />
                  <label htmlFor='backgroundFile' className='w-fit filesLabel'>
                    <input
                      type='file'
                      name='backgroundFile'
                      id='backgroundFile'
                      accept='image/png, image/jpeg'
                      required
                      onChange={(event) => {
                        setAttachmentFileNames((prevFileNames) => ({
                          ...prevFileNames,
                          detailedBackground: event.target.files[0]?.name || '',
                        }));
                      }}
                    />
                    Upload files...
                  </label>
                  <span id='backgroundAttachment'>
                    {attachmentFileNames.detailedBackground}
                  </span>
                </div>
              )}
            </div>

            {/* Animal/pet checkbox */}
            <div className='my-2'>
              <input
                type='checkbox'
                className='myCheckbox'
                id='animalPet'
                ref={animalPetRef}
                onChange={() => {
                  toggleSection('showAnimalPet');
                  handleInputChange(animalPetRef, 'animalPetPrice');
                }}
              />
              <label htmlFor='animalPet' className='font-semibold'>
                {' '}
                Does your commission have an animal/pet? +75% to the toal price
              </label>
              {sections.showAnimalPet && (
                <div className='flex flex-col gap-2'>
                  <small>
                    {' '}
                    ✦ describe the animal/pet or submit file references{' '}
                  </small>
                  <textarea
                    className='p-1 w-full rounded border'
                    name='animalPetMessage'
                  />
                  <label htmlFor='animalPetFile' className='w-fit filesLabel'>
                    <input
                      type='file'
                      name='animalPetFile'
                      id='animalPetFile'
                      accept='image/png, image/jpeg'
                      required
                      onChange={(event) => {
                        setAttachmentFileNames((prevFileNames) => ({
                          ...prevFileNames,
                          animalPet: event.target.files[0]?.name || '',
                        }));
                      }}
                    />
                    Upload files...
                  </label>
                  <span id='animalPetAttachment'>
                    {attachmentFileNames.animalPet}
                  </span>
                </div>
              )}
            </div>

            {/* Hard deadline checkbox */}
            <div className='my-2'>
              <input
                type='checkbox'
                className='myCheckbox'
                id='hardDeadline'
                ref={hardDeadlineRef}
                onChange={() => {
                  toggleSection('showHardDeadline');
                  handleInputChange(hardDeadlineRef, 'hardDeadlinePrice');
                }}
              />
              <label htmlFor='hardDeadline' className='font-semibold'>
                {' '}
                Does your commission have a hard deadline? +50% of the total
                price
              </label>
              {sections.showHardDeadline && (
                <div>
                  <small> ✦ Specify deadline date</small>
                  <input
                    type='date'
                    name='deadline'
                    className='p-2 w-full rounded border'
                    id='deadline'
                    required
                  />
                </div>
              )}
            </div>

            {/* Multimedia References Upload */}
            <h2 className='text-xl font-semibold'>Multimedia References</h2>
            <h3 className='mb-2'>
              Pose, expression, clothes, traits, character reference sheets,
              mood boards, sample of poses/angles.
            </h3>
            <textarea
              className='p-1 mb-2 w-full rounded border'
              name='multimediaMessage'
              id='multimediaMessage'
              ref={multimediaMessageRef}
            />
            <label htmlFor='attachment' className='filesLabel'>
              <input
                type='file'
                name='multimediaAttachment'
                id='attachment'
                accept='image/png, image/jpeg'
                required
                onChange={(event) => {
                  setAttachmentFileNames((prevFileNames) => ({
                    ...prevFileNames,
                    multimediaAttachment: event.target.files[0]?.name || '',
                  }));
                }}
              />
              Upload files...
            </label>
            <br />
            <span id='mainAttachment'>
              {attachmentFileNames.multimediaAttachment}
            </span>

            {/* Clear and Submit Buttons */}
            <div className='flex justify-between mt-2'>
              <button
                type='button'
                title='Clear the form'
                onClick={clearInputFields}
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
          </div>

          {/* Template form table */}
          <input type='hidden' name='_template' value='table'></input>
          {/* Redirect to a thank you page */}
          <input
            type='hidden'
            name='_next'
            value={`https://ishinoguro.com.ar/thankyou`}
          />
        </form>
      </div>
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
    </div>
  );
});

export default CommissionFormBlock;
