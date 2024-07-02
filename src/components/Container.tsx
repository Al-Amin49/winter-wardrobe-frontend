
import { ReactNode } from 'react';

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className=' max-w-[1220px] mx-auto'>
      {children}
    </div>
  );
};

export default Container;