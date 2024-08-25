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
    <div className="grid gap-6 lg:grid-cols-2">
      {data?.data.map((post: TCommunityPost) => (
        <div
          key={post._id}
          className="card p-6 m-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
        >
          <div className="card-body">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={post.author?.profile}
                className="h-10 w-10 rounded-full border"
                alt={`${post.author?.username} profile`}
              />
              <p className="font-semibold text-lg text-gray-800">
                {post.author?.username}
              </p>
            </div>
            <p className="text-gray-700 text-sm lg:text-base mb-6">
              {post.content}
            </p>
            <div className="flex items-center space-x-6">
              <button className="flex items-center font-semibold text-gray-600 hover:text-red-500 transition-colors duration-200">
                <Heart className="mr-2" /> <span>{post?.likes}</span>
              </button>
              <Link
                to={`/community/${post._id}`}
                className="flex items-center font-semibold text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                <MessageCircle className="mr-2" /> {post?.comments.length} Comments
              </Link>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-auto">
            <Link to={`/community/${post._id}`}>
              <button className="btn btn-primary text-white font-bold w-full lg:w-auto">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
