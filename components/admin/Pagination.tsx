import { useDispatch } from 'react-redux';
import { PageInfo } from '../../model/interface/common';

import { usersSlice } from '../../redux/slices/usersSlice';
import cls from '../../utils/cls';

interface Props {
  PageInfo?: PageInfo;
}

function Pagination({ PageInfo }: Props) {
  const pageDispatch = useDispatch();

  const handlePrevPage = () => {
    if (!PageInfo) return;
    pageDispatch(usersSlice.actions.handlePage(PageInfo?.currPage - 1));
  };

  const handleAfterPage = () => {
    if (!PageInfo) return;
    pageDispatch(usersSlice.actions.handlePage(PageInfo?.currPage + 1));
  };

  const handlePageChange = (p: number) => {
    pageDispatch(usersSlice.actions.handlePage(p));
  };

  return (
    <>
      <nav className="flex justify-center items-center mt-6 rounded-1g font-[Poppins]">
        <button
          className="mr-3 sm:mr-6 hover:font-bold p-1 cursor-pointer hover:scale-110 transition-all text-gray-500 hover:text-pintalk-dark-brown"
          disabled={PageInfo && PageInfo?.currPage - 1 === -1}
          onClick={handlePrevPage}
        >
          &lt;
        </button>
        <div className="sm:space-x-4">
          {Array(PageInfo?.totalPage)
            .fill(PageInfo?.totalPage)
            .map((_, i) => (
              <button
                className={cls(
                  'w-6 h-6 sm:w-8 sm:h-8 text-sm sm:text-xl font-bold',
                  i === PageInfo?.currPage
                    ? 'bg-pintalk-dark-yellow text-white rounded-full'
                    : 'hover:text-gray-400 transition-all',
                )}
                key={i}
                onClick={() => handlePageChange(i)}
              >
                {i + 1}
              </button>
            ))
            .splice(0)
            .slice(PageInfo?.startPage === 0 ? 0 : PageInfo?.startPage, PageInfo?.endPage)}
        </div>
        <button
          className="ml-3 sm:ml-6 hover:font-bold p-1 cursor-pointer hover:scale-110 transition-all text-gray-500 hover:text-pintalk-dark-brown"
          disabled={PageInfo && PageInfo?.currPage + 1 === PageInfo?.totalPage}
          onClick={handleAfterPage}
        >
          &gt;
        </button>
      </nav>
    </>
  );
}

export default Pagination;
