import { Link } from "react-router-dom";
import { Home } from 'lucide-react';
import { useAppSelector } from "../../../redux/hook";
import AddPost from "../../../pages/CommunityPost/AddPost";
import Subline from "../../../components/Subline";



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
        <div className="hidden md:block  py-2 ">
        <h2 className="text-center text-primary text-2xl font-extrabold">Spread Your Gratitude, Spark Inspiration</h2>
        <Subline  bgPrimary={false}/>
        </div>
     <div className="flex justify-between items-center ">
    <AddPost/>
     </div>

     
    </div> 
  <div className="lg:hidden">
  <h2 className="text-center  text-primary py-2 text-base font-extrabold mt-10">Spread Your Gratitude, Spark Inspiration</h2>
  <Subline bgPrimary={false} />
  </div>
    
        </>
    );
};

export default CommunityNav;