import { Link } from "react-router-dom";
import { Home } from 'lucide-react';
import { useAppSelector } from "../../../redux/hook";
import AddPost from "../../../pages/CommunityPost/AddPost";



const CommunityNav = () => {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const userInfo:any= useAppSelector((state)=>state.auth.userInfo);
  
     const user= userInfo?.data.user
    return (
        <>
           <div  className='flex justify-evenly items-center py-2'>
     <Link to="/"> <h1 className='text-primary'><Home/></h1></Link>
       <div className='flex items-center'>
      {
        userInfo && <> 
         <img src={user.profile} className='h-8 md:h-10 lg:h-18 ' alt="" /> 
        <p className='text-sm md:text-base lg:text-lg font-bold'>{user.username}</p>
        </>
      }
       </div>
        <h2 className="text-center hidden lg:block  text-primary py-2 text-base md:text-lg lg:text-2xl font-extrabold">Spread Your Gratitude, Spark Inspiration</h2>
     <div className="flex justify-between items-center ">
    <AddPost/>
     </div>

     
    </div> 
    <h2 className="text-center lg:hidden text-primary py-2 text-base font-extrabold my-10">Spread Your Gratitude, Spark Inspiration</h2>
        </>
    );
};

export default CommunityNav;