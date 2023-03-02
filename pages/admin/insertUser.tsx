import { NextPage } from 'next';
import React from 'react';
import RegisterForm from '../../components/register/RegisterForm';
import RegisterTitle from '../../components/register/RegisterTitle';

const AdminRegister: NextPage = () => {
  return (
    <>
      <RegisterTitle title="회원등록" />
      <RegisterForm />
    </>
  );
};
export default AdminRegister;
