import { Cherry } from 'lucide-react';
import { lusitana } from './font';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Cherry className="h-12 w-12 rotate-[15deg] bg-red-500"/>
      {/* <p className="text-[44px] hidden md:flex">🏆?🤞</p> */}
    </div>
  );
}
