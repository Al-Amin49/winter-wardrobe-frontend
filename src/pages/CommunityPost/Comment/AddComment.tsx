import { SubmitHandler, useForm } from "react-hook-form";
import { useAddCommentsMutation } from "../../../redux/api/commentApi";
import { TCommunityComment } from "@/types";
import { toast } from "react-toastify";
import { useGetSinglePostQuery } from "../../../redux/api/communityPostApi";
import { useParams } from "react-router-dom";

const AddComment = () => {
    const {id}= useParams()
    const {data:post}= useGetSinglePostQuery(id)
    const [addComment]= useAddCommentsMutation();
    console.log('coment', addComment)
    const { register, handleSubmit, reset } = useForm<TCommunityComment>();
    const onSubmit:SubmitHandler<TCommunityComment>=async(data)=>{
        addComment({postId:post?.data?._id, content:data?.content})
        reset();
        toast.success("Comment added succesfully")
        console.log(data)
    }
    return (
        <div className="flex space-x-5">
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