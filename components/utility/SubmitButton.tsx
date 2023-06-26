import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const SubmitButton = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      type='submit'
      className=' dark:hover:bg-[#0daadc]dark:focus:ring-blue-800 w-full rounded-lg bg-[#0daadc] px-4 py-2.5 text-center font-medium text-white hover:bg-[#0daadc] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#0daadc] sm:w-auto sm:px-6'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
