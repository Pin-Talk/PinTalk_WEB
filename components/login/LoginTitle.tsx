import Image from 'next/image';
import React from 'react';
import logo from '../../public/asset/logo/pinbank_icon.png';

interface Props {
  title: string;
}

const LoginTitle = ({ title }: Props) => {
  return (
    <>
      <div className="flex items-end mb-10 absolute top-10">
        <Image src={logo} alt="logo" width={48} height={48} />
        <h1 className="uppercase font-bold text-pintalk-dark-yellow text-2xl w-12">intalk</h1>
      </div>
      <h1 className="font-extrabold text-transparent text-3xl bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text h-16 mb-6">
        {title}
      </h1>
    </>
  );
};
export default LoginTitle;
