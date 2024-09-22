import { SubmitHandler, useForm } from "react-hook-form";
import { useAddCommentsMutation } from "../../../redux/api/commentApi";
import { TCommunityComment } from "@/types";
import { toast } from "react-toastify";
import { useGetSinglePostQuery } from "../../../redux/api/communityPostApi";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";

const AddComment = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo: any = useAppSelector((state) => state.auth.userInfo);
    const navigate= useNavigate();
  const user = userInfo?.data?.user;
    const {id}= useParams()
    const {data:post}= useGetSinglePostQuery(id)
    const [addComment]= useAddCommentsMutation();
    console.log('coment', addComment)
    const { register, handleSubmit, reset } = useForm<TCommunityComment>();
    const onSubmit:SubmitHandler<TCommunityComment>=async(data)=>{
      if(user){
        addComment({postId:post?.data?._id, content:data?.content})
        reset();
        toast.success("Comment added succesfully")
        console.log(data)
      }
      else{
        navigate("/login")
      }
    }
    return (
        <div className="flex space-x-5 mx-4 lg:mx-0">
            <form 
           onSubmit={handleSubmit(onSubmit)}
            >
           <div className="flex space-x-5">
           <textarea
            {...register("content", {required:true})}
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Write comments"
            />
             <button 
             className="btn btn-primary">Add Comment</button>
           </div>
            </form>
        </div>
    );
};

export default AddComment;