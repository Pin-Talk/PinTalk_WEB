import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';

const Sidebar = () => {
  const { id } = useRouter().query;
  const menus = [
    { name: '개인정보', link: `/userMemberDetail/${id}`, icon: MdOutlineDashboard },
    { name: '계좌조회', link: `/userAccounts/${id}`, icon: MdOutlineDashboard },
    { name: '이체내역', link: `/userWithdrawalHistory/${id}`, icon: MdOutlineDashboard },
    { name: '출금내역', link: `/userTransferHistory/${id}`, icon: MdOutlineDashboard },
    { name: '계좌등록', link: `/userRegisterAccount/${id}`, icon: MdOutlineDashboard },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-pintalk-dark-brown min-h-screen ${
          open ? 'w-48' : 'w-16'
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              // menus에도 margin이라는게 없는데 menu.margin && mt-5  왜 있는지 이해가 안되서 우선 주석으로 했어요.
              className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
