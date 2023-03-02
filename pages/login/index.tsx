import React from 'react';
import LoginLayout from '../../components/login/LoginLayout';
import LoginForm from '../../components/login/LoginForm';
import { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
};
export default Login;
