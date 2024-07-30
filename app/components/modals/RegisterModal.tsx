'use client';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/auth/register', data);
      registerModal.onClose();
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  return <Modal disabled={isLoading} isOpen={registerModal.isOpen} title="register" actionLabel="Continue" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} />;
};

export default RegisterModal;
