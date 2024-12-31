'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modals from './Modals';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button/Button';
import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { sign } from 'crypto';

const RegisterModal = () => {
  const registerModel = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);
    axios

      .post('/api/register', data)

      .post('/api/register', data)
      .then(() => {
        registerModel.onClose();
      })
      .catch(error => {
        toast.error('something went wrong', error);
        toast.error('something went wrong', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
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
        label="Continue with github"
        label="Continue with github"
        icon={AiFillGithub}
        onClick={() => {
          signIn('github');
        }}
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
          <div>Already have an account? </div>
          <div
            onClick={registerModel.onClose}
            className="
            text-neutral-800
            cursor-pointer
            hover:underline"
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Modals
        disabled={isLoading}
        isOpen={registerModel.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModel.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default RegisterModal;
