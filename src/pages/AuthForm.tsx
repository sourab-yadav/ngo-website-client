import { useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/v1"; // Update with your backend URL

interface LoginFormInputs {
  email: string;
  password: string;
}

interface RegisterFormInputs extends LoginFormInputs {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

// Validation schemas
const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const registerSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function AuthForm() {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs | LoginFormInputs>({
    resolver: yupResolver(
      isRegister ? registerSchema : loginSchema
    ) as Resolver<RegisterFormInputs | LoginFormInputs>,
  });

  const onSubmit = async (data: RegisterFormInputs | LoginFormInputs) => {
    setLoading(true);
    setErrorMsg("");
    try {
      if (isRegister) {
        // Registration API Call
        const response = await axios.post(
          `${API_BASE_URL}/users/create-user`,
          data
        );
        alert("Registration successful! You can now log in.");
        setIsRegister(false);
      } else {
        // Login API Call
        const response = await axios.post(`${API_BASE_URL}/users/login`, {
          email: data.email,
          password: data.password,
        });
        alert("Login successful!");
        console.log("Token:", response.data.token); // Save token in local storage or context
      }
    } catch (error: any) {
      setErrorMsg(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          {isRegister ? "Register" : "Login"}
        </h2>
        {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          {isRegister && (
            <>
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input {...register("firstName")} className="input-field" />
                <p className="text-red-500 text-xs">
                  {isRegister &&
                    "firstName" in errors &&
                    errors.firstName?.message}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input {...register("lastName")} className="input-field" />
                <p className="text-red-500 text-xs">
                  {isRegister &&
                    "lastName" in errors &&
                    errors.lastName?.message}
                </p>
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input {...register("email")} className="input-field" />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              className="input-field"
            />
            <p className="text-red-500 text-xs">{errors.password?.message}</p>
          </div>
          {isRegister && (
            <div>
              <label className="block text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                className="input-field"
              />
              <p className="text-red-500 text-xs">
                {isRegister &&
                  "confirmPassword" in errors &&
                  errors.confirmPassword?.message}
              </p>
            </div>
          )}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Processing..." : isRegister ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 hover:underline ml-1"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}
