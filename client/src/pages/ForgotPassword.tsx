import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log("Password reset requested for:", data.email);
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-sm bg-base-100 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
 
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

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={!isValid}
        >
          Send Reset Link
        </button>

        <div className="text-center">
          <Link to="/login" className="link link-hover text-sm">
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
}
