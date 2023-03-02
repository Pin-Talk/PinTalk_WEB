import { NextPage } from 'next';
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import UserListTable from '../../components/admin/table/UserListTable';

const Admin: NextPage = () => {
  return (
    <AdminLayout title="사용자 조회">
      <UserListTable />
    </AdminLayout>
  );
};

export default Admin;
