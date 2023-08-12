import { block } from 'million/react';
import { Link } from 'wouter';
import DropdownBlock from './DropdownBlock';
import ilustration2 from '../assets/images/ilustration2.png';
import '../stylesheets/TOSBlock.css';

const TOSBlock = block(function TOS() {
  const sections = [
    {
      title: 'TERMS AND CONDITIONS',
      content: [
        <div key={'termsAndConditions'} className='termsContainer'>
          <ul>
            <li>
              Commission requests can be made through email, twitter or tumblr,
              but you have to full the commission form.{' '}
            </li>
            <li>
              For direct and faster communication, Discord ID can be asked after
              accepting your commission request.
            </li>
            <li>
              <h2>ARTWORK USE</h2>
            </li>
            <li>
              ✦ I, as the artist, hold all the copyright of my artwork; this
              includes posting the work on my social media and adding it as a
              part of my portfolio or with advertising purposes (commission
              openings/examples). However, I will be posting a watermarked,
              low-quality version for safety purposes.
            </li>
            <li>✦ Commissions are for personal use only.</li>

            <li>
              <h2>CLIENT AGREES TO</h2>
            </li>
            <li>
              ✦ The client have the right to publish, use and promote the
              commissioned artwork wherever you wish as long as proper credit is
              given to the artist.
            </li>
            <li>
              ✦ The client can print the commission and/or make any kind of
              merchandise for yourself and only for your personal use.
            </li>
            <li>
              ✦ The client is not allowed to reproduce or alter commissioned
              piece to resell for profit. Do NOT, in any circumstances, use my
              art or pieces of it to make and/or sell NFTs
            </li>
            <li>
              ✦ The client can request to keep it private or to be uploaded in a
              later date. Please do let me know in your commission request.
              *There will be an added fee if the client does not want me to post
              the work on my social media.*
            </li>

            <li>
              <h2>PAYMENT</h2>
            </li>
            <li>✦ Prices are in *USD* and payments via *Paypal*.</li>
            <li>
              ✦ Full payment is done through invoice before starting the
              commission request.
            </li>
            <li>
              ✦ Commission will be cancelled if the invoice isn&apos;t paid
              within 72 hours.
            </li>
            <li>
              ✦ Price may increase depending the complexity of the commission.
            </li>
            <li>✦ NO Refunds once work has started</li>

            <li>
              <h2>TIME & DELIVERY</h2>
            </li>
            <li>
              ✦ I have a period of 2 weeks ~ 2 months to deliver the final
              result of a commission.{' '}
            </li>
            <li>
              ✦ The client will receive a full resolution .png or .jpg file with
              background + no background version of the completed artwork. You
              will not receive the source file, and no physical goods will be
              shipped.
            </li>
          </ul>
        </div>,
      ],
    },
    {
      title: 'COMISSION PROCESS',
      content: [
        <div key={'comissionProcess'} className='termsContainer'>
          <ul>
            <li>
              <h2>WILL DO</h2>
            </li>
            <li>✦ Original Characters</li>
            <li>✦ Canon x OC</li>
            <li>✦ Real people (*must be 18 years old or older*)</li>
            <li>✦ Fanart </li>
            <li>✦ Fully referenced Guns/Armor: Extra charge</li>
            <li>
              ✦ NSFW* (Suggestive, explicit genitalia and sexual acts are
              allowed.
            </li>
            <li>
              ✦ Gore* (Cuts, bruising, small wounds, scarring, blood
              stains/splatters.)
            </li>
            <li>I may decline if I&apos;m uncomfortable.</li>

            <li>
              <h2>WON&apos;T DO</h2>
            </li>
            <li>✦ Furry, MLP</li>
            <li>✦ No real people in nsfw escenarios</li>
            <li>✦ Age gap, incest, forced, vore, scat, zoophilia</li>
            <li>
              ✦ -10y.o fictional minors, loli/shota (not even if it’s in a
              ““legal”” age)
            </li>
            <li>✦ Self-harming, hardcore gore, death/dying (sexual)</li>

            <li>
              <h2>MULTIMEDIA REFERENCES</h2>
            </li>
            <li>
              ✦ Provide complete references of your character. (Ex. fullbody,
              base colors, details like clothing, props or accesories.){' '}
            </li>
          </ul>
        </div>,
      ],
    },
  ];

  return (
    <>
      <div className='flex flex-col justify-center items-center py-2 w-full bg-white'>
        <Link to='/'>
          <a>
            <img
              src={ilustration2}
              alt='Ilustrator Portrait'
              className='w-20 md:w-32'
            />
          </a>
        </Link>
      </div>
      <h2 className='w-full text-2xl min-[480px]:text-3xl md:text-5xl mb-4 bg-white py-4 text-[#524f50] text-center'>
        <strong>━ ˖°˖ ☾</strong> I n f o <strong> ˖°˖ ━</strong>
      </h2>
      <div className='flex flex-col px-4 md:flex-row md:gap-4 lg:px-16 lg:gap-10'>
        {sections.map((section, index) => (
          <DropdownBlock
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </>
  );
});

export default TOSBlock;
