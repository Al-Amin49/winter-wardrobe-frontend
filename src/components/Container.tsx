
import { ReactNode } from 'react';

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className=' max-w-screen-xl mx-auto'>
      {children}
    </div>
  );
};

export default Container;