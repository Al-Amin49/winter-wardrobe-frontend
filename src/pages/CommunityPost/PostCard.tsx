import { MessageCircle } from "lucide-react";
import Loading from "../../components/Loading";
import { useGetAllCommunityPostQuery } from "../../redux/api/communityPostApi";
import { Link } from "react-router-dom";
import { TCommunityPost } from "@/types";
import AddLike from "./Like/AddLike";
import { format } from "date-fns";

const PostCard = () => {
  const { data, isLoading } = useGetAllCommunityPostQuery("");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 p-4 lg:p-8">
      {data?.data.map((post: TCommunityPost) => (
        <div
          key={post._id}
          className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-white"
        >
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={post.author?.profile}
              className="h-12 w-12 rounded-full border border-gray-300"
              alt={`${post.author?.username} profile`}
            />
            <div>
              <p className="font-semibold text-lg text-gray-800">
                {post.author?.username}
              </p>
              <p className="text-sm text-gray-500">
              Posted on {format(new Date(post.createdAt), "MMM dd, yy")}

              </p>
            </div>
          </div>

          <p className="text-gray-700 text-sm lg:text-base mb-6 line-clamp-3">
            {post.content}
          </p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-6">
              <AddLike post={post} />
              <Link
                to={`/community/${post._id}`}
                className="flex items-center font-semibold text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                <MessageCircle className="mr-2" /> {post?.comments?.length} Comments
              </Link>
            </div>
            <Link to={`/community/${post._id}`} className="inline-block">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200">
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
