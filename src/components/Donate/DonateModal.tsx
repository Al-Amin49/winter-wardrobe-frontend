import { useGetSingleClothesQuery } from "../../redux/api/ClotheApi";
import { useAddDonateMutation } from "../../redux/api/donateApi";
import { useAppSelector } from "../../redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

// type TClothe={
//   _id:string,
//   title:string
// }
// type TUser={
//   _id:string,
//   username:string

// }
type TDonate={
  userId:string,
  clotheId:string,
  quantity:number
}
const DonateModal = () => {
  const userInfo = useAppSelector((state) => state.auth.userInfo) as { data: { user: { _id: string } } } | null;
  const user = userInfo?.data.user;
  const { id } = useParams();
  const { data } = useGetSingleClothesQuery(id);
  const { register, handleSubmit, reset } = useForm<TDonate>();
  const {_id}= data.data;
  const navigate = useNavigate();
  const [addDonate] = useAddDonateMutation();
  console.log("donate", addDonate);

  const openModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error("Element is not a dialog");
    }
  };
  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal instanceof HTMLDialogElement) {
      modal.close();
    }
  };

  const onSubmit:SubmitHandler<TDonate> = async (data) => {
    const donateData={
      userId:user?._id || '',
      clotheId: _id,
      quantity:data.quantity
    }
    addDonate(donateData)
    toast.success("Post added successfully");
    reset();
    console.log('data', data)
    //close the modal
    closeModal();
    navigate("/dashboard/admin-home")
  };

  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };
  
  return (
    <>
      {userInfo ? (
        <button
          onClick={openModal}
          className="btn btn-xs  lg:btn-md btn-primary text-white font-bold"
        >
          Donate Now
        </button>
      ) : (
        <button
          onClick={navigateToLogin}
          className="btn btn-xs  lg:btn-md btn-primary text-white font-bold"
        >
          Donate Now
        </button>
      )}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box mx-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0 text-primary">
              ✕
            </button>
          </form>
          <h3 className="text-xl text-primary font-bold text-center my-2">
            Donate and save lives
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full max-w-xs lg:max-w-lg"
          >
            <div className=" mt-4">
              <div className="label">
                <span className="label-text text-center">username</span>
              </div>

              <input
                type="text"
                className="input input-bordered input-primary w-full max-w-xs my-2"
                placeholder="username"
                {...register('userId')}
                value={user?._id}
                readOnly
              />
              <div className="label">
                <span className="label-text">Clothe title</span>
              </div>
              <input
                type="text"
                className="input input-bordered input-primary w-full max-w-xs my-2"
                placeholder="Clothe title"
                {...register('clotheId')}
                value={_id}
                readOnly
              />

              <div className="label">
                <span className="label-text">Quantity</span>
              </div>
              <input
                type="number"
                className="input input-bordered input-primary w-full max-w-xs my-2"
                placeholder="qunatity"
                {...register('quantity')}
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

export default DonateModal;
