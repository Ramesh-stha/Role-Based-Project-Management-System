import React from 'react';

const Formerror = ({children}:{children:React.ReactNode}) => {
  return (
    <p className='text-sm text-red-600 '>{children}</p>
  );
};

export default Formerror;