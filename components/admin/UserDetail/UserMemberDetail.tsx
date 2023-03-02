import axios from 'axios';
import { useEffect, useState } from 'react';
import UserInfoData from './UserInfoData';
import { UserInfo } from '../../../model/interface/userList';
import { useRouter } from 'next/router';

const UserMemberDetail = () => {
  const { id } = useRouter().query;
  const [userInfo, UpdateInfo] = useState<UserInfo[]>([]);

  useEffect(() => {
    axios.get(`/userMemberDetail/${id}`).then((response) => {
      UpdateInfo(response.data);
    });
  }, []);

  return <UserInfoData userInfo={userInfo} />;
};

export default UserMemberDetail;
