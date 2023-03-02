import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useMutation from '../../hooks/useMutation';
import { useAppDispatch } from '../../redux/store';

interface Location {
  search: string;
}

const Certification: NextPage = () => {
  const router = useRouter();
  const { mutation, data, error, loading } = useMutation('/openBank/token');
  const userInfoDispatch = useAppDispatch();
  const handleOpenBankCode = () => {};

  useEffect(() => {
    console.log('mount');
  }, []);

  useEffect(() => {
    console.log('test data', data);
  }, [data]);

  return error ? (
    <div className="p-5">
      <span className="text-xl text-red-400 font-bold">{error}</span>
    </div>
  ) : (
    <>
      <button className="border-2 px-10 py-2">인증</button>
    </>
  );
};
export default Certification;
