import { useLottie } from "lottie-react";
import donate from "../../utils/lottie/donate.json";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Formdata, LottieAnimationOptions } from "../../types/index";
import { useLoginMutation } from "../../redux/api/UserApi";
import Loading from "../../components/Loading";
import { setCredentials } from "../../redux/features/authSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hook";
import { useState } from "react";

const Login = () => {
  const [loginData, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, setValue } = useForm<Formdata>();

  const onSubmit: SubmitHandler<Formdata> = async (data) => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const res = await loginData(userData).unwrap();
      dispatch(setCredentials({ ...res }));
      console.log("res", res);

      toast.success("Login successfully.");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Function to set demo account credentials
  const handleUseDemoAccount = (email: string, password: string) => {
    setValue("email", email);
    setValue("password", password);
    setIsModalOpen(false);
  };

  //donation animation
  const options = {
    animationData: donate,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options as LottieAnimationOptions, {
    height: 400,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 pt-8 lg:pt-24">
      {/* Lottie Animation */}
      <div className="flex-1 min-w-[300px]">{View}</div>

      {/* Login Form */}
      <div className="flex-1 min-w-[300px] flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">Login</h2>
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
        {/* Button to open demo modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-sm btn-primary rounded-full text-white mt-4"
        >
          Use Demo Account
        </button>
        <p className="font-semibold pt-4">
          Not have a account? Create a account{" "}
          <Link to="/register" className="text-primary underline">
            Register
          </Link>
        </p>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-red-600 text-2xl hover:text-gray-900 focus:outline-none"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                Use Demo Account
              </h3>
              <p className="mb-6 text-center text-gray-600">
                Choose a demo account to login:
              </p>

              {/* Admin account */}
              <div className="mb-4 text-center">
                <button
                  className="btn btn-primary text-white mt-2 w-full"
                  onClick={() =>
                    handleUseDemoAccount("test1@gmail.com", "dev123")
                  }
                >
                  Use Admin Account
                </button>
              </div>

              {/* User account */}
              <div className="mb-4 text-center">
                <button
                  className="btn btn-secondary text-white mt-2 w-full"
                  onClick={() =>
                    handleUseDemoAccount("test2@gmail.com", "dev123")
                  }
                >
                  Use User Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
