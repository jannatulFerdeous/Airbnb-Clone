'use client';

import { signIn } from 'next-auth/react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Modals from './Modals';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button/Button';
import { FaGoogle } from 'react-icons/fa';
import useLoginModel from '@/app/hooks/useLoginModel';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModel = useLoginModel();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then(callback => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in ');
        router.refresh();
        loginModel.onClose();
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const toggle = useCallback(() => {
    loginModel.onClose();
    registerModal.onOpen();
  }, [loginModel, registerModal]);

  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back!" subtitle="Login to your account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with google"
        icon={FcGoogle}
        onClick={() => {
          signIn('google');
        }}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {
          signIn('github');
        }}
      />
      <div
        className="
      text-neutral-500
      text-center
      mt-4
      font-light"
      >
        <div className="justify-center flex flex-row items-center gap-2 ">
          <div>First time using Airbnb? </div>
          <div
            onClick={toggle}
            className="
            text-neutral-800
            cursor-pointer
            hover:underline"
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Modals
        disabled={isLoading}
        isOpen={loginModel.isOpen}
        title="LogIn Here"
        actionLabel="Continue"
        onClose={loginModel.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default LoginModal;
