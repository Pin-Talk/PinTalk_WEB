import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { openNewWindow } from '../../utils/openNewWindow';
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';
import LoginTitle from './LoginTitle';
import Link from 'next/link';

interface LoginFormData {
  id: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>();

  const onValid = (data: LoginFormData) => {
    console.info(data);
  };

  const onForgotAccount = () => {
    router.push('/login/forgot-account');
  };

  const openWindow = () => {
    openNewWindow({
      url: 'register',
    });
  };

  return (
    <div>
      <Link href="/">
        <span className="text-amber-600 hover:text-amber-500 cursor-pointer p-1 font-bold">
          홈으로 가기
        </span>
      </Link>

      <main className="w-full h-[40rem] flex flex-col items-center justify-center bg-white shadow-md rounded-md relative">
        <LoginTitle title="로그인" />
        <form onSubmit={handleSubmit(onValid)} className="w-[50%]">
          <LoginInput
            register={register('id', {
              required: '아이디를 입력해주세요.',
            })}
            type="text"
            label="아이디"
            htmlFor="id"
            errorMessage={errors?.id?.message}
          />
          <LoginInput
            register={register('password', {
              required: '비밀번호를 입려해주세요.',
            })}
            type="password"
            label="비밀번호"
            htmlFor="password"
            errorMessage={errors?.password?.message}
          />

          <LoginButton title="로그인" isValid={isValid} />
        </form>

        <div className="mt-5 text-amber-700 text-sm flex justify-between w-[50%]">
          <span
            onClick={onForgotAccount}
            className="block hover:text-amber-600 cursor-pointer transition-all"
          >
            아이디·비밀번호 찾기
          </span>
          <span
            onClick={openWindow}
            className="block hover:text-amber-600 cursor-pointer transition-all"
          >
            회원가입
          </span>
        </div>
      </main>
    </div>
  );
};
export default LoginForm;
