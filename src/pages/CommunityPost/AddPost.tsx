import { useAddCommunityPostMutation } from "../../redux/api/communityPostApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";


type TAddPost={
    content:string
}
const AddPost = () => {
  const [addData]= useAddCommunityPostMutation()
  const { register, handleSubmit, reset } = useForm<TAddPost>();

  const openModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error("Element is not a dialog");
    }
  };
  const onSubmit: SubmitHandler<TAddPost> = async (data) => {
    console.log(data);
    addData(data)
    toast.success('Post added successfully');
    reset();
    //close the modal
    const modal = document.getElementById('my_modal_1');
    if (modal instanceof HTMLDialogElement) {
      modal.close();
    }
  };
    return (
        <>
 <button onClick={openModal} className="btn btn-xs  lg:btn-md btn-primary text-white font-bold">
        Add Post
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box mx-auto">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0 text-primary">
              ✕
            </button>
          </form>
          <h3 className="text-xl text-primary font-bold text-center my-2">
            Share and Inspire others
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full max-w-xs lg:max-w-lg"
          >
            <div className=" mt-4">
            
              <textarea
                placeholder="Write your thought"
                {...register("content")}
                className="textarea textarea-bordered textarea-lg w-full max-w-xs "
              />
             
              
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full max-w-xs mx-auto text-white mt-8"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
        </>
    );
};

export default AddPost;