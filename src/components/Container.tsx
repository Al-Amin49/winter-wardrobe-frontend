
import { ReactNode } from 'react';
import {motion } from 'framer-motion';
type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <motion.div 
    className=' max-w-[1220px] mx-auto'
    
    >
      {children}
    </motion.div>
  );
};

export default Container;