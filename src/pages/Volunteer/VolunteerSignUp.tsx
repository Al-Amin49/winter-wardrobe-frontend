import React, { useState } from "react";
import Container from "../../components/Container";
import { useLottie } from "lottie-react";
import volunteerSignUp from "../../utils/lottie/volunteerSignUp.json";
import { SubmitHandler, useForm } from "react-hook-form";
import Subline from "../../components/Subline";
import { useAddVolunteerMutation } from "../../redux/api/volunteerApi";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

type TVolunteerSignUp={
    name:string,
    email:string,
    phone:number,
    location:string,
    image:string,
    availability:string
}
const VolunteerSignUp = () => {
  const { register, handleSubmit } = useForm<TVolunteerSignUp>();
  const [addVolunteer, {isLoading}]= useAddVolunteerMutation()
  const [availability, setAvailability] =useState({
    weekdays: false,
    weekends: false,
    evenings: false,
  });

  const onSubmit:SubmitHandler<TVolunteerSignUp> = (data:TVolunteerSignUp) => {
    console.log(data);
    addVolunteer(data);
    toast.success('Register succesfully')
  };

  const handleAvailabilityChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAvailability((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const options = {
    animationData: volunteerSignUp,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, {
    height: 400,
  });

  if(isLoading){
    return <Loading/>
  }
  return (
    <Container className="pb-4">
      <h3 className="text-2xl text-secondary font-bold text-center pt-16 ">
        Sign Up and get into our team
      </h3>
      <Subline bgPrimary={true}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center py-10">
        <div>{View}</div>
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full max-w-xs border border-x-primary py-6 px-4 shadow-lg"
          >
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone")}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="text"
              placeholder="Location"
              {...register("location")}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="text"
              placeholder="Image URL"
              {...register("image")}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <div>
                <h2 className="font-bold my-1">Availability </h2>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="weekdays"
                  checked={availability.weekdays}
                  onChange={handleAvailabilityChange}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <span className="ml-2">Weekdays</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  name="weekends"
                  checked={availability.weekends}
                  onChange={handleAvailabilityChange}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <span className="ml-2">Weekends</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  name="evenings"
                  checked={availability.evenings}
                  onChange={handleAvailabilityChange}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <span className="ml-2">Evenings</span>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full max-w-xs text-white mt-8"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default VolunteerSignUp;
