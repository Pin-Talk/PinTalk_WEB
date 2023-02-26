import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import useMutation from '../../hooks/useMutation';
import { useAppDispatch } from '../../redux/store';

interface Location {
  search: string;
}

const Certification = () => {
  const { search } = useLocation() as Location;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const { mutation, data, error, loading } = useMutation('/openBank/token');
  const userInfoDispatch = useAppDispatch();

  const code = search.split('&')[0].split('=')[1];
  const handleOpenBankCode = () => {
    if (!code) return setMessage('올바르지 않은 인증입니다.');
    mutation({
      code,
    });
    console.log('handler', data);
  };

  useEffect(() => {
    console.log('mount');
    code && handleOpenBankCode();
  }, []);

  useEffect(() => {
    console.log('test data', data);
  }, [data]);

  return message || error ? (
    <div className="p-5">
      <span className="text-xl text-red-400 font-bold">{message || error}</span>
    </div>
  ) : (
    <>
      <button className="border-2 px-10 py-2">인증</button>
    </>
  );
};
export default Certification;
