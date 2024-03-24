import { useLottie } from "lottie-react";
import donate from "../../utils/lottie/donate.json";
import { Link,  useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Formdata, LottieAnimationOptions } from "../../types/index";
import { useLoginMutation } from "../../redux/api/UserApi"
import Loading from '../../components/Loading';
import { setCredentials } from "../../redux/features/authSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hook";
const Login = () => {
  const [loginData, {isLoading}]= useLoginMutation();
   const navigate=useNavigate();
   const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
 
    // formState: { errors },
  } = useForm<Formdata>();
  const onSubmit: SubmitHandler<Formdata> = async(data) => {
    
   try{
    const userData = {
      email: data.email,
      password: data.password
    };
    const res = await loginData(userData).unwrap();
    dispatch(setCredentials({ ...res }));
    console.log('res', res)
 
    toast.success("Login successfully.");
    navigate("/")
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
  const { View } = useLottie(options as LottieAnimationOptions , { height: 400 });
  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-4  py-32">
      {/* Lottie Animation */}
      <div className="flex-1 min-w-[300px]">{View}</div>

      {/* Login Form */}
      <div className="flex-1 min-w-[300px] flex flex-col items-center ">
        <h2 className="text-2xl font-bold mb-4 text-primary ">Login</h2>
        <form
         onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-full max-w-xs border border-x-primary py-10 px-4 shadow-lg"
        >
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
            Login
          </button>
        </form>
        <p className=" font-semibold pt-4">
          Not have a account? Create a account{" "}
          <Link to="/register" className="text-primary  underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
