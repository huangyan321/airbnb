'use client';

import { Toaster } from 'react-hot-toast';
import { type PropsWithChildren } from 'react';
const ToastProvider: React.FC = ({ children }: PropsWithChildren) => {
  return <Toaster />;
};
export default ToastProvider;
