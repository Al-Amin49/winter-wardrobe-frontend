import { Heart } from "lucide-react";
import { TCommunityPost, TCommunityUser } from "@/types"; // Assuming this is the correct path for types
import { useToggleLikeMutation } from "../../../redux/api/likeApi";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hook";

interface AddLikeProps {
  post: TCommunityPost;
}

const AddLike = ({ post }: AddLikeProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userInfo: any = useAppSelector((state) => state.auth.userInfo);
  const singleUser = userInfo?.data?.user;
  const [toggleLike, { isLoading }] = useToggleLikeMutation();
  const [localLikes, setLocalLikes] = useState(post.likes); // Local state for like count
  const [liked, setLiked] = useState(
    post?.likedBy?.some((user: TCommunityUser) => user._id === singleUser._id)
  ); // Check if user has already liked the post

  const handleLike = async () => {
    try {
      // Optimistically toggle like/unlike
      if (liked) {
        setLocalLikes(localLikes - 1);
      } else {
        setLocalLikes(localLikes + 1);
      }
      setLiked(!liked); // Toggle the liked state

      // Call the mutation to update on server
      await toggleLike(post._id).unwrap();
    } catch (error) {
      console.error("Error toggling like:", error);
      // Revert the optimistic UI changes if there's an error
      if (liked) {
        setLocalLikes(localLikes + 1);
      } else {
        setLocalLikes(localLikes - 1);
      }
      setLiked(!liked);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={`flex items-center font-semibold transition-colors duration-200 ${
        liked ? "text-green-500" : "text-gray-600 hover:text-red-500"
      }`}
    >
      <Heart className="mr-2" />
      <span>{localLikes}</span>
    </button>
  );
};

export default AddLike;
