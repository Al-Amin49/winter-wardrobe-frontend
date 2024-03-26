import { SubmitHandler, useForm } from "react-hook-form";
import { TTestimonial } from "../../../types";
import { usePostTestimonialMutation } from "../../../redux/api/testimonialApi";
import { useAppSelector } from "../../../redux/hook";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";

const Testimonials = () => {
  const [postData, { isLoading }] = usePostTestimonialMutation();
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  
  const { user } = userInfo ? userInfo.data  : null
  const { register, handleSubmit, reset } = useForm<TTestimonial>();

  const onSubmit: SubmitHandler<TTestimonial> = (data) => {
    postData(data);
    reset();
    toast.success("Create Testimonial Successfully");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex-1 min-w-[300px] flex flex-col items-center ">
        <h2 className="text-2xl font-bold mb-4 text-primary ">
          Share your experience and Inspire others.
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-full max-w-xs border border-x-primary  py-4 px-6  shadow-lg"
        >
          <h2 className="text-xl text-primary text-center py-3">Create Testimonial</h2>
          <input
            readOnly
            defaultValue={user?.username}
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="location"
            {...register("location", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="message"
            {...register("message")}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Rating"
            {...register("rating", { required: true, min: 1, max: 5 })}
            className="input input-bordered w-full max-w-xs"
            title="Please enter a rating between 1 and 5"
          />
          <button
            type="submit"
            className="btn btn-primary w-full max-w-xs text-white mt-8"
          >
            Create Testimonial
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
