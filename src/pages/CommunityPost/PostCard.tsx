import { Heart } from "lucide-react";
import Loading from "../../components/Loading";
import { useGetAllCommunityPostQuery } from "../../redux/api/communityPostApi";

type TCommunityUser = {
  username: string;
  profile: string;
};

type TCommunityPost = {
  _id: string;
  content: string;
  author: TCommunityUser;
};

const PostCard = () => {
  const { data, isLoading } = useGetAllCommunityPostQuery("");

  console.log("data", data?.data);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {data?.data.map((post: TCommunityPost) => (
        <div key={post._id} className="card p-6 m-10 border shadow-lg">
          <div className="card-body">
            <div className="flex items-center space-x-2 ">
              <img src={post.author.profile} className="h-8" alt="" />
              <p className="font-bold">{post.author.username}</p>
            </div>
            <p>{post.content}</p>
            <div className="flex items-center space-x-2">
              <button>
                <Heart />
              </button>
              <button>Comment</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
