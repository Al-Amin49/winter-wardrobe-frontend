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
    return <p>Error: Post not found</p>;
  }

  const { author, content, likes } = post;

  const comments = commentsData?.data || [];

  if (postLoading || commentsLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  place-content-center">

        {/* get all likes on post */}
        <div className=" ">
          <h3 className="text-xl font-bold mt-5">Liked by : </h3>
        </div>

        {/* post details (single post) */}
        <div className=" ">
          <div className="card-body">
            <div className="flex items-center space-x-2">
              <img src={author?.profile} className="h-8" alt="" />
              <p className="font-bold">{author?.username}</p>
            </div>
            <p className="text-base my-6">{content}</p>
            <div className="flex items-center space-x-2">
              <button className="flex items-center font-bold">
                <Heart /> <span className="mx-1">{likes}</span>
              </button>

                {/* Total comments in a post */}
              <span className="flex items-center font-bold">
                <MessageCircle /> {comments.length}
              </span>
            </div>
          </div>

          {/* Add Comment */}
          <div >
           <AddComment/>
          </div>

          
        </div>
        {/* all comments */}
        <div>
            <p className="text-secondary mt-5 ">Comments: {comments.length}</p>
            {comments.map((comment: TCommunityComment) => (
              <div key={comment._id} className="card-body">
                <div className="flex items-center space-x-2">
                  <img src={comment?.author?.profile} className="h-8" alt="" />
                  <p className="font-bold">{comment?.author?.username}</p>
                </div>
                <p className="text-base">
                  comment:{" "}
                  <span className="text-secondary">{comment.content}</span>
                </p>
              </div>
            ))}
          </div>
      </div>
    </Container>
  );
};

export default PostDetails;
