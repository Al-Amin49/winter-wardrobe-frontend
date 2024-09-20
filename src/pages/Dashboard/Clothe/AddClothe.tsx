import { toast } from "react-toastify";
import { useAddClothesMutation } from "../../../redux/api/ClotheApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { TClothe } from '../../../types';

const AddClothe = () => {
    const [addClothe] = useAddClothesMutation();
    const { register, handleSubmit, reset } = useForm<TClothe>();
    
    const onSubmit: SubmitHandler<TClothe> = async (data) => {
        await addClothe(data);
        reset();
        toast.success("Clothe added successfully");
        console.log(data);
    };
    
    return (
        <div className="max-w-md mx-auto my-8 p-4 border rounded-lg shadow-lg">
            <h3 className="text-2xl text-primary font-bold text-center mb-4">
                Add Clothe
            </h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register("title", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Description"
                        {...register("description", { required: true })}
                        className="input input-bordered w-full h-24"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Category"
                        {...register("category", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Size</label>
                    <select
                        {...register("size", { required: true })}
                        multiple
                        className="input input-bordered w-full h-24"
                    >
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                    </select>
                    <p className="text-gray-500 text-xs">Hold down the Ctrl (Windows) or Command (Mac) button to select multiple sizes.</p>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Img Url"
                        {...register("image", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-full text-white mt-4"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddClothe;
