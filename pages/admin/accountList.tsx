import { NextPage } from 'next';
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import AccountListTable from '../../components/admin/table/AccountListTable';
const AccountList: NextPage = () => {
  return (
    <AdminLayout title="계좌 조회">
      <AccountListTable />
    </AdminLayout>
  );
};
export default AccountList;
