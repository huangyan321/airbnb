'use client';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
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
      toast.error('Something went wrong!');
      console.error(error);
    }
    setIsLoading(false);
  };
  const BodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create An Account!"></Heading>
      <Input id="email" label="Email" register={register} errors={errors} required />
      <Input id="name" label="Name" register={register} errors={errors} required />
      <Input id="password" label="Password" register={register} errors={errors} required />
    </div>
  );
  const FooterContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => {}}></Button>
      <Button outline label="Continue with Github" icon={AiFillGithub} onClick={() => {}}></Button>
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>Already have an account?</div>
          <div onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline">
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={BodyContent}
      footer={FooterContent}
    />
  );
};

export default RegisterModal;
