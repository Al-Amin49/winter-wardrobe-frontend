import { Heart, MessageCircle } from "lucide-react";
import Loading from "../../components/Loading";
import { useGetAllCommunityPostQuery } from "../../redux/api/communityPostApi";
import { Link } from "react-router-dom";
import { TCommunityPost } from "@/types";


const PostCard = () => {
  const { data, isLoading } = useGetAllCommunityPostQuery("");
  

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {data?.data.map((post: TCommunityPost) => (
        <div key={post._id} className="card p-6 m-10 border shadow-lg flex lg:flex-row items-center ">
          <div className="card-body">
            <div className=" flex items-center space-x-2  ">
              <img src={post.author?.profile} className="h-8 " alt="" />
              <p className="font-bold ">{post.author?.username}</p>
            </div>
            <p className="text-base my-6 ">{post.content}</p>
            <div className="flex items-center space-x-2">
              <button className="flex items-center font-bold">
                <Heart  /> <span className="mx-1">{post?.likes}</span>
                {/* className="bg-red-500 rounded-2xl text-white" */}
              </button>
              <div className="tooltip" data-tip="See Comments">
              <span
              className="flex items-center font-bold"
              >
                <MessageCircle /> {post?.comments.length} </span>
                 </div>
             
            </div>
          </div>
        <div>
       <Link to={`/community/${post._id}`}>
       <button className="btn btn-primary text-white font-bold">View Details</button>
       </Link>
        </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
