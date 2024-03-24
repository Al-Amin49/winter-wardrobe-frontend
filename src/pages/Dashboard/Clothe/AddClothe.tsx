import { toast } from "react-toastify";
import { useAddClothesMutation } from "../../../redux/api/ClotheApi";
import { SubmitHandler, useForm } from "react-hook-form";
import {TClothe} from '../../../types';

const AddClothe = () => {
    const [addClothe]= useAddClothesMutation();
    const { register, handleSubmit, reset } = useForm<TClothe>();
    const onSubmit:SubmitHandler<TClothe>=async(data)=>{
        addClothe(data)
        reset();
        toast.success("Clothe added succesfully")
        console.log(data)
    }
    return (
        <div>
             <h3 className="text-xl text-primary font-bold text-center my-2">
            Add Clothe
          </h3>
          <div className="flex flex-col justify-center items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="  w-full max-w-xs  lg:max-w-md "
          >
            <div className="space-y-2 ">
              <input
                
                type="text"
                placeholder="Title"
                {...register("title", {required:true})}
                className="input input-bordered w-full max-w-xs "
              />
              <textarea
                placeholder="Description"
                {...register("description", {required:true})}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                
                type="text"
                placeholder="Category"
                {...register("category",  {required:true})}
                className="input input-bordered w-full max-w-xs"
              />
              <input
          
                type="text"
                placeholder="Size"
                {...register("size", {required:true})}
                className="input input-bordered w-full max-w-xs"
              />
              <input
              
                type="text"
                placeholder="Img Url"
                {...register("image",{required:true})}
                className="input input-bordered w-full max-w-xs"
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
        </div>
    );
};

export default AddClothe;