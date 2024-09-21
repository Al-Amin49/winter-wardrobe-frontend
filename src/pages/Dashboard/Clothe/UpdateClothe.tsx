import {
  useGetSingleClothesQuery,
  useUpdateClothesMutation,
} from "../../../redux/api/ClotheApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import { TClothe } from "../../../types";
type TUpdateProps = {
  clotheId: string;
};
const UpdateClothe = ({ clotheId }: TUpdateProps) => {
  const [updateClothe] = useUpdateClothesMutation();
  const { data, isLoading } = useGetSingleClothesQuery(clotheId);
  console.log("getSingle", data);

  const { register, handleSubmit, reset } = useForm<TClothe>();

  const openModal = () => {
    const modal = document.getElementById(`my_modal_${clotheId}`);
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error("Element is not a dialog");
    }
  };
  const onSubmit: SubmitHandler<TClothe> = async (data) => {
    console.log(data);
    updateClothe({
      id: clotheId,
      body: data,
    });

    toast.success(`${data.title} Updated`);
    reset();
    //close the modal
    const modal = document.getElementById(`my_modal_${clotheId}`);
    if (modal instanceof HTMLDialogElement) {
      modal.close();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <button onClick={openModal} className="btn btn-lg bg-orange-500">
        <FaEdit />
      </button>
      <dialog id={`my_modal_${clotheId}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0 text-primary">
              ✕
            </button>
          </form>
          <h3 className="text-xl text-primary font-bold text-center my-2">
            Update Clothe
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full max-w-xs lg:max-w-lg"
          >
            <div className="grid grid-cols-2 gap-2 place-items-center">
              <input
                defaultValue={data?.data.title}
                type="text"
                placeholder="Title"
                {...register("title")}
                className="input input-bordered w-full  my-2"
              />
              <textarea
                defaultValue={data?.data.description}
                placeholder="Description"
                {...register("description")}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                defaultValue={data?.data.category}
                type="text"
                placeholder="Category"
                {...register("category")}
                className="input input-bordered w-full max-w-xs"
              />
              <select
              defaultValue={data?.data?.size}
                {...register("size", { required: true })}
                multiple
                className="input input-bordered w-full h-24"
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
              <p className="text-gray-500 text-xs">
                Hold down the Ctrl (Windows) or Command (Mac) button to select
                multiple sizes.
              </p>
              <input
                defaultValue={data?.data.image}
                type="text"
                placeholder="Img Url"
                {...register("image")}
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
      </dialog>
    </>
  );
};

export default UpdateClothe;
