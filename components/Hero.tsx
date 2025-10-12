import Link from 'next/link';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';

export default function Hero() {
  return (
    <div className='mt-32 mb-24'>
      <h1 className='text-[29px] md:text-[46px] font-bold mb-2'>
        Hello, I'm Bryan Temple 👋🏾
      </h1>
      <p className='mb-8 text-[#D0CFCF] font-light max-w-sm'>
        {` I'm a${' '}`}
        <span className='font-bold text-white'>
          Accessibility & User Experience | Frontend Developer | Quality Assurance Specialist
        </span>{' '}
        {`passionate about accessibility, inclusive design, and universal design principles to create digital experiences accessible to all.`}
      </p>
      <div className='flex gap-8'>
        <Link href={'https://www.linkedin.com/in/bryan-temple/'} target='_blank'>
          <BsLinkedin size={20} />
        </Link>
        <Link href={'https://github.com/bryan-temple'} target='_blank'>
          <BsGithub size={20} />
        </Link>
        <Link href={'https://twitter.com/mraccessibility'} target='_blank'>
          <BsTwitter size={20} />
        </Link>
        <Link href={'https://www.instagram.com/bryantemple5/'} target='_blank'>
          <BsInstagram size={20} />
        </Link>
      </div>
    </div>
  );
}
