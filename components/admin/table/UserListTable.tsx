import UserMembers from "../userMembers";
import useMembers from "../../../hooks/useMembers";

import Pagination from "../Pagination";
import UserFilteringTable from "../filtering/UserFilteringTable";

const UserListTable = () => {
  const { users: userList, error, PageInfo, emailCodeGroup } = useMembers();

  return (
    <div>
      {error ? (
        <span>{error}</span>
      ) : (
        <div className="w-full h-full">
          <UserFilteringTable emailCodeGroup={emailCodeGroup} />
          <div className="overflow-hidden rounded-lg shadow-md mt-8 mb-12">
            <table className="w-full">
              <thead className="bg-white ">
                <tr>
                  <th className="w-10 p-3 text-sm font-semi-bold tracking-wide text-left">
                    고유번호
                  </th>
                  <th className="w-10 p-3 text-sm font-semi-bold tracking-wide text-left">성별</th>
                  <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">이름</th>
                  <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">
                    주민등록번호
                  </th>
                  <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">
                    전화번호
                  </th>
                  <th className="w-48 p-3 text-sm font-semi-bold tracking-wide text-left">주소</th>
                  <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">
                    이메일
                  </th>
                  <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">
                    가입일자
                  </th>
                  <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">
                    정보변경일자
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {userList?.map((member) => {
                  return <UserMembers member={member} key={member.id} />;
                })}
              </tbody>
            </table>
          </div>
          <Pagination PageInfo={PageInfo} />
        </div>
      )}
    </div>
  );
};

export default UserListTable;
