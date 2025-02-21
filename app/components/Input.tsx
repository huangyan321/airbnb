import { BiDollar } from 'react-icons/bi';
import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form';
interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const Input: React.FC<InputProps> = ({ errors, id, label, register, disabled, formatPrice, required, type }) => {
  return (
    <div className="w-full relative">
      {formatPrice && <BiDollar size={24} className="text-neutral-700 absolute top-5 left-2" />}
      <input
        id={id}
        disabled={disabled}
        type={type}
        {...register(id, { required })}
        placeholder=' '
        className={`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-red-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
          `}
      />
      <label
        className={`
         absolute
         text-md
         duration-150
         transform
         -translate-y-3
         top-5
         z-10
         origin-[0]
         ${formatPrice ? 'left-9' : 'left-4'}
         peer-placeholder-shown:scale-100
         peer-placeholder-shown:translate-y-0
         peer-focus:scale-75
         peer-focus:-translate-y-4
         ${errors[id] ? 'text-rose-500' : 'text-neutral-400'}
         `}
        htmlFor=""
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
