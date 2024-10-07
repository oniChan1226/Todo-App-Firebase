import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import InputField from "../../components/Utilities/InputField";
import Button from "../../components/Utilities/Buttons/Button";
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useUserAuth } from "../../components/Contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().min(1, "Required!").email("Invalid Format"),
  password: z.string().min(6, "Password too short"),
});

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { logIn, googleSignIn, user } = useUserAuth();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoggingIn(true);
    try {
      await logIn(data.email, data.password);
      navigate("/todo");
      toast.success("Welcome Back!");
    } catch (error) {
        if(error.code === 'auth/invalid-credential') toast.error("Invalid Credentials");
        else toast.error("Error Occured. Please try again")
    } finally {
      setIsLoggingIn(false);
    }
  };
  
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
        await googleSignIn();
        navigate("/todo");
        toast.success("Welcome!");
    }
    catch(error) {
        toast.error("An error occurred during registration.");
    }
    finally{
        setIsLoggingIn(false);
    }
  }

//   useEffect(() => {
//     if (user) {
//         navigate("/todo");
//     }
// }, [user, navigate]);

  return (
    <div className="dark:bg-bgDark flex flex-col justify-center items-center py-12 md:py-20 px-4 space-y-1">
      <h1 className="text-xl md:text-3xl xl:text-5xl font-semibold tracking-wide dark:text-text_gray_dark">
        Log In
      </h1>
      <p className="dark:text-text_gray_dark capitalize">Organize your thoughts</p>
      <form className="flex flex-col justify-center items-center space-y-4 py-4"
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center justify-center md:justify-between space-y-4 relative">
          <InputField
            label="Email"
            type="email"
            register={register}
            registerName={"email"}
            error={errors.email?.message}
          />
        </div>
        <div className="flex flex-col items-center justify-center md:justify-between space-y-4 relative">
        <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            register={register}
            registerName={"password"}
            error={errors.password?.message}
          />
          <button
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
            className="absolute top-1 right-2"
          >
            {showPassword ? (
              <HiEye className="text-purpleMain" />
            ) : (
              <HiEyeOff className="text-purpleMain" />
            )}
          </button>
        </div>
        <div className="flex items-center justify-center space-x-2 w-full">
          <Button type="submit" width="w-full" disabled={isLoggingIn}>
            {isLoggingIn ? <PulseLoader color="#fff" size={8} /> : "LogIn"}
          </Button>
        </div>
        <div className="w-full">
          <p className="text-center my-2 dark:text-text_gray_dark">OR</p>
          <GoogleButton
            style={{ width: "100%" }}
            onClick={handleGoogleSignIn}
          />
        </div>
      </form>
    </div>
  );
};

export default LogIn;
