import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const useScrollGrow = () => {
     const componentRef= useRef<HTMLDivElement>(null);
     const {scrollYProgress}=useScroll({
        target:componentRef,
        offset:['0 1', '1.2 1'],
     })
     const scaleValues=useTransform(scrollYProgress, [0,1], [0.7, 1]);

     const style={
        scale:scaleValues,
      
     }
    return {componentRef, style}

};

export default useScrollGrow;