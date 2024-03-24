import { useLottie } from "lottie-react";
import donate from "../../utils/lottie/donate.json";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link , useNavigate} from "react-router-dom";
import { useRegisterMutation } from "../../redux/api/UserApi";
import { useAppDispatch } from "../../redux/hook";
import { Formdata } from "../../types/index";
import { setCredentials } from "../../redux/features/authSlice";
 import Loading from '../../components/Loading';
import { toast } from "react-toastify";

const Register = () => {
  const [registerData, {isLoading}]= useRegisterMutation();
  const dispatch= useAppDispatch();
  const navigate= useNavigate()

 const {
   register,
   handleSubmit,

  //  formState: { errors },
 } = useForm<Formdata>();
 const onSubmit: SubmitHandler<Formdata> = async(data) => {
   
  try{
   const userData = {
    username:data.username,
     email: data.email,
     password: data.password
   };
   const res= await registerData(userData).unwrap();
   dispatch(setCredentials({...res}))
   toast.success("Register successfully.");
   navigate("/")
   console.log(data);
  }
  catch(error){
   console.log(error)
  }
 };

 

  //donation animation
  const options = {
    animationData: donate,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, { height: 400 });
if(isLoading){
  return <Loading/>
}
  return (
    <>
    
    <div className="flex flex-wrap justify-center items-center gap-4  py-28">
      {/* Lottie Animation */}
      <div className="flex-1 min-w-[300px]">{View}</div>

      {/* Register Form */}
      <div className="flex-1 min-w-[300px] flex flex-col items-center ">
        <h2 className="text-2xl font-bold mb-4 text-primary ">Register</h2>
        <form
        onSubmit={handleSubmit(onSubmit)}
         className="flex flex-col gap-2 w-full max-w-xs border border-x-primary py-10 px-4 shadow-lg">
        <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="input input-bordered w-full max-w-xs"
          />
          <button
            type="submit"
            className="btn btn-primary w-full max-w-xs text-white mt-8"
          >
            Register
          </button>
        </form>
        <p className=" font-semibold pt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary  underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Register;
