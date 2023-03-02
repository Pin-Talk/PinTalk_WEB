import Link from 'next/link';
import React from 'react';
import { navbarsAccount } from '../../../../data/navbar/navbars';
import cls from '../../../../utils/cls';

interface Props {
  target: string;
  isActive: boolean;
}

const SideSubNavItems = ({ target, isActive }: Props) => {
  const handleItems = (target: string) => {
    switch (target) {
      case '계좌':
        return navbarsAccount;
      case '이체':
        return navbarsAccount;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <ul
        className={cls(
          isActive ? `scale-y-100 h-full` : 'scale-y-0 h-0',
          'w-full origin-top-left transition-all pl-10 flex',
        )}
      >
        <div className="absolute h-full w-1 border-2 mr-10 " />
        <div className="space-y-4 text-lg pl-10">
          {handleItems(target)?.map((item, i) => (
            <div key={item.id}>
              <Link href={`/admin/${item.id}`}>
                <li>
                  <span className="text-gray-500 hover:text-gray-400 transition-all">
                    {item.title}
                  </span>
                </li>
              </Link>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};
export default SideSubNavItems;
