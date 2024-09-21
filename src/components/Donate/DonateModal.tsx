import { useGetSingleClothesQuery } from "../../redux/api/ClotheApi";
import { useAddDonateMutation } from "../../redux/api/donateApi";
import { useAppSelector } from "../../redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

// Define the type for donation form data
type TDonate = {
  email: string; 
  quantity: number; 
};

const DonateModal = () => {
  const userInfo = useAppSelector(
    (state) => state.auth.userInfo
  ) as { data: { user: { _id: string; email: string } } } | null;

  const user = userInfo?.data.user;

  // Get the clothe ID from the URL params
  const { id } = useParams<{ id: string }>();
  
  // Fetch the clothe details using the ID
  const { data: clotheData } = useGetSingleClothesQuery(id);
  
  // Initialize form methods
  const { register, handleSubmit, reset } = useForm<TDonate>();
  
  // Navigate function
  const navigate = useNavigate();
  
  // Mutation hook for adding donation
  const [addDonate] = useAddDonateMutation();

  // Open and close modal functions
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

  // Form submission handler
  const onSubmit: SubmitHandler<TDonate> = async (data) => {
    const donateData = {
      email: user?.email,
      quantity: data.quantity,
       clotheId: clotheData?.data._id, 
      userId: user?._id, 
    };

    try {
      await addDonate(donateData).unwrap();
      toast.success("Donation added successfully!");
      reset();
      closeModal();
      if(user?.role==='user') {
        navigate("/dashboard/donation-history");
      }
      else{
        navigate("/dashboard/adminhome");

      }
      
    } catch (error) {
      toast.error("Failed to add donation");
    }
  };

  // Navigate to login if the user is not logged in
  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <>
      {userInfo ? (
        <button
          onClick={openModal}
          className="btn btn-xs lg:btn-md btn-primary text-white font-bold"
        >
          Donate Now
        </button>
      ) : (
        <button
          onClick={navigateToLogin}
          className="btn btn-xs lg:btn-md btn-primary text-white font-bold"
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
            <div className="mt-4">
              <div className="label">
                <span className="label-text text-center">Username</span>
              </div>

              <input
                type="text"
                className="input input-bordered input-primary w-full max-w-xs my-2"
                placeholder="Username"
                {...register("email")}
                value={user?.email} 
                readOnly
              />
              <div className="label">
                <span className="label-text">Quantity</span>
              </div>
              <input
                type="number"
                className="input input-bordered input-primary w-full max-w-xs my-2"
                placeholder="Quantity"
                {...register("quantity", { required: true })}
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
