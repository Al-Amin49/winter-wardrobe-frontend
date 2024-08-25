import { TCommunityComment } from "@/types";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { useGetSinglePostQuery } from "../../redux/api/communityPostApi";
import { useParams } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";
import { useGetAllCommentsQuery } from "../../redux/api/commentApi";
import AddComment from "./Comment/AddComment";

const PostDetails = () => {
  const { id } = useParams();
  const { data, isLoading: postLoading } = useGetSinglePostQuery(id);
  const { data: commentsData, isLoading: commentsLoading } =
    useGetAllCommentsQuery(id);

  if (postLoading || commentsLoading) {
    return <Loading />;
  }

  const post = data?.data;

  if (!post) {
    return <p className="text-center text-red-500">Error: Post not found</p>;
  }

  const { author, content, likes } = post;
  const comments = commentsData?.data || [];

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-start">

        {/* Liked by section */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <h3 className="text-xl font-bold mt-5 lg:mt-0">Liked by</h3>
          <ul className="space-y-2 mt-4">
            {/* Assuming you have a list of users who liked the post */}
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {post.likesUsers?.map((user:any) => (
              <li key={user.id} className="flex items-center space-x-2">
                <img
                  src={user.profile}
                  alt={`${user.username} profile`}
                  className="h-8 w-8 rounded-full"
                />
                <p className="text-sm font-medium">{user.username}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Post details (single post) */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="card p-6 border border-gray-200 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={author?.profile}
                className="h-10 w-10 rounded-full border"
                alt={`${author?.username} profile`}
              />
              <p className="font-semibold text-lg text-gray-800">
                {author?.username}
              </p>
            </div>
            <p className="text-gray-700 text-base mb-6">{content}</p>
            <div className="flex items-center space-x-6">
              <button className="flex items-center font-semibold text-gray-600 hover:text-red-500 transition-colors duration-200">
                <Heart className="mr-2" /> <span>{likes}</span>
              </button>
              <span className="flex items-center font-semibold text-gray-600">
                <MessageCircle className="mr-2" /> {comments.length} Comments
              </span>
            </div>
          </div>

          {/* Add Comment */}
          <div className="mt-8">
            <AddComment />
          </div>
        </div>

        {/* All comments */}
        <div className="lg:col-span-3 order-3">
          <h3 className="text-lg font-semibold text-gray-800 mt-8 lg:mt-0">
            Comments: {comments.length}
          </h3>
          <div className="space-y-4 mt-4">
            {comments.map((comment: TCommunityComment) => (
              <div
                key={comment._id}
                className="p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <img
                    src={comment?.author?.profile}
                    className="h-8 w-8 rounded-full border"
                    alt={`${comment?.author?.username} profile`}
                  />
                  <p className="font-semibold text-sm text-gray-800">
                    {comment?.author?.username}
                  </p>
                </div>
                <p className="text-gray-700 text-sm">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostDetails;
