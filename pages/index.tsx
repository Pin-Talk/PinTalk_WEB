import { NextPage } from 'next';
import React from 'react';
import Main from '../components/home/Main';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};
export default Home;
