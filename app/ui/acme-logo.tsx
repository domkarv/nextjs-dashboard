import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div className='flex flex-row items-center leading-none text-white'>
      <GlobeAltIcon className='h-12 w-12 rotate-[15deg]' />
      <p className='text-5xl font-semibold'>Acme</p>
    </div>
  );
}
