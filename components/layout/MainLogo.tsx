import Link from 'next/link';
import React from 'react';

const PinBankLogo = require('../../public/asset/logo/pinbank_icon.png');

const MainLogo = () => {
  return (
    <Link className="flex" href="/">
      <div className="flex items-center">
        <img className="object-contain h-9 pr-1 w-full" src={PinBankLogo}></img>
        <div className="text-kukmin-dark-brown font-bold text-xl">INBANK</div>
      </div>
    </Link>
  );
};
export default MainLogo;
