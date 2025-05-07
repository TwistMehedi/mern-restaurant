import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { userStore } from "../store/userSlice";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }, // <-- Add isValid
  } = useForm({
    mode: "onChange", // Important for real-time validation
  });

  const {signup} = userStore((state)=> state);

  const onSubmit =async(data: any) => {
    console.log("Form Data:", data);
    await signup(data)
  };

  const password = watch("password");

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-md bg-base-100 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        {/* Name */}
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Minimum 3 characters" },
            })}
          />
          {errors.name && (
            <p className="text-error text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-error text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          {errors.password && (
            <p className="text-error text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-error text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            {...register("number", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,}$/,
                message: "Enter a valid number (min 10 digits)",
              },
            })}
          />
          {errors.number && (
            <p className="text-error text-sm">{errors.number.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={!isValid} // <-- Disable if form is invalid
          >
            Submit
          </button>
        </div>
        <Link className="text-blue-600 text-center" to={"/login"}>Alredy have an account Login</Link>
      </form>
    </div>
  );
}
