import React, { useEffect, useState } from "react";
import InputField from "../../components/Utilities/InputField";
import { useUserAuth } from "../../components/Contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Utilities/Buttons/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { PulseLoader } from "react-spinners";
import GoogleButton from "react-google-button";

// Zod validation schema
const schema = z
  .object({
    userName: z.string().min(3, "Required!"),
    email: z.string().min(1, "Required!").email("Invalid Format"),
    password: z.string().min(6, "Password too short"),
    confirmPassword: z.string().min(6, "Confirm Password is required!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const form = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const { signUp, googleSignIn, user } = useUserAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const onSubmit = async (data) => {
    setIsRegistering(true);
    try {
      await signUp(data.email, data.password, data.userName);
      navigate("/todo");
      toast.success(`${data.userName} is Registered!`);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered.");
      } else {
        toast.error("An error occurred during registration.");
      }
    } finally {
      setIsRegistering(false);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setIsRegistering(true);
    try {
      await googleSignIn();
      navigate("/todo");
      toast.success(`Successfully signed in with Google!`);
    } catch (error) {
      toast.error("An error occurred during registration.")
    } finally {
      setIsRegistering(false);
    }
  };

//   useEffect(() => {
//     if (user) {
//         navigate("/todo");
//     }
// }, [user, navigate]);

  return (
    <div className="dark:bg-bgDark flex flex-col justify-center items-center py-12 md:py-20 px-4 space-y-1">
      <h1 className="text-xl md:text-3xl xl:text-5xl font-semibold tracking-wide dark:text-text_gray_dark">
        Sign Up
      </h1>
      <p className="dark:text-text_gray_dark">It's Free Forever</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center space-y-4 py-4"
      >
        <div className="flex md:block flex-col items-center justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <InputField
            label="Name"
            register={register}
            registerName={"userName"}
            error={errors.userName?.message}
          />
          <InputField
            label="Email"
            type="email"
            register={register}
            registerName={"email"}
            error={errors.email?.message}
          />
        </div>

        <div className="flex md:block flex-col items-center justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4 relative">
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            register={register}
            registerName={"password"}
            error={errors.password?.message}
          />
          <InputField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            register={register}
            registerName={"confirmPassword"}
            error={errors.confirmPassword?.message}
          />
          <button
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
            className="absolute top-1 md:top-5 right-2"
          >
            {showPassword ? (
              <HiEye className="text-purpleMain" />
            ) : (
              <HiEyeOff className="text-purpleMain" />
            )}
          </button>
        </div>
        <div className="flex items-center justify-center space-x-2 w-full">
          <Button type="submit" width="w-full" disabled={isRegistering}>
            {isRegistering ? <PulseLoader color="#7871fc" size={8} /> : "Sign Up"}
          </Button>
          <Button type="reset" width="w-full" isIndex="secondary">
            Reset
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

export default SignUp;
