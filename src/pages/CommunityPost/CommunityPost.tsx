import { Home } from 'lucide-react';
import {useAppSelector} from '../../redux/hook'
import PostCard from './PostCard';
import { Link } from 'react-router-dom';

const CommunityPost = () => {
  
    const {userInfo}= useAppSelector((state)=>state.auth);
    const user= userInfo?.data.user
  return (
 <>
    <div  className='flex justify-evenly items-center py-2'>
     <Link to="/"> <h1 className='text-primary'><Home/></h1></Link>
       <div className='flex items-center'>
       <img src={user.profile} className='h-10 hidden lg:block lg:h-18' alt="" /> 
        <p className='font-bold'>{user.username}</p>
       </div>
        <h2 className="text-center text-primary py-2 text-lg lg:2xl font-extrabold">Spread Your Gratitude, Spark Inspiration</h2>
     <div className="flex justify-between items-center ">
     <button className='btn btn-primary'>Add Post </button>
     </div>

     
    </div>

    <PostCard/>

 </>
  );
};

export default CommunityPost;
