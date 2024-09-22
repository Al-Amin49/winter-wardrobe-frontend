/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCommunityComment } from "@/types";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { useGetSinglePostQuery } from "../../redux/api/communityPostApi";
import { useParams } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";
import { useGetAllCommentsQuery } from "../../redux/api/commentApi";
import AddComment from "./Comment/AddComment";
import { useGetAllLikesQuery } from "../../redux/api/likeApi";

const PostDetails = () => {
  const { id } = useParams();
  const { data, isLoading: postLoading } = useGetSinglePostQuery(id);
  const { data: commentsData, isLoading: commentsLoading } =
    useGetAllCommentsQuery(id);
    const {data:allLikes}= useGetAllLikesQuery(id)

  if (postLoading || commentsLoading) {
    return <Loading />;
  }
  const likesUsers = allLikes?.data || [];
  const post = data?.data;

  if (!post) {
    return <p className="text-center text-red-500">Error: Post not found</p>;
  }

  const { author, content, likes } = post;
  const comments = commentsData?.data || [];

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-5">

        {/* Liked by section */}
        <div className="lg:col-span-4 order-2 lg:order-1 mx-4 lg:mx-0">
          <h3 className="text-xl font-bold">Liked by</h3>
          <ul className="mt-4 space-y-2">
            {/* // eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {likesUsers?.map((user: any) => (
              <li key={user.id} className="flex items-center space-x-3">
                <img
                  src={user.profile}
                  alt={`${user?.username} profile`}
                  className="h-10 w-10 rounded-full border-2 border-gray-300"
                />
                <p className="text-sm font-medium text-gray-700">
                  {user?.username}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Post details (single post) */}
        <div className="lg:col-span-8 order-1 lg:order-2 ">
          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md transition hover:shadow-lg mx-4 lg:mx-0">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={author?.profile}
                className="h-12 w-12 rounded-full border-2 border-gray-300"
                alt={`${author?.username} profile`}
              />
              <div>
                <p className="font-semibold text-lg text-gray-800">
                  {author?.username}
                </p>
                <p className="text-sm text-gray-500">Posted on Sep 22, 2024</p>
              </div>
            </div>
            <p className="text-gray-700 text-base mb-6">{content}</p>
            <div className="flex items-center space-x-6 text-sm">
              <button className="flex items-center font-semibold text-gray-600 hover:text-red-500 transition">
                <Heart className="mr-1 h-5 w-5" /> <span>{likes}</span>
              </button>
              <span className="flex items-center font-semibold text-gray-600">
                <MessageCircle className="mr-1 h-5 w-5" /> {comments.length} Comments
              </span>
            </div>
          </div>

          {/* Add Comment */}
          <div className="mt-8">
            <AddComment />
          </div>
        </div>

        {/* All comments */}
        <div className="lg:col-span-8 lg:col-start-5 order-3 mx-4 lg:mx-0 ">
          <h3 className="text-lg font-semibold text-gray-800">
            Comments: {comments.length}
          </h3>
          <div className="space-y-4 mt-4">
            {comments.map((comment: TCommunityComment) => (
              <div
                key={comment._id}
                className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <img
                    src={comment?.author?.profile}
                    className="h-10 w-10 rounded-full border-2 border-gray-300"
                    alt={`${comment?.author?.username} profile`}
                  />
                  <p className="font-semibold text-sm text-gray-800">
                    {comment?.author?.username}
                  </p>
                </div>
                <p className="text-gray-700 text-sm">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostDetails;
