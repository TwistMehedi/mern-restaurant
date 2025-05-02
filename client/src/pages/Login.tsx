import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-sm bg-base-100 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

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

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={!isValid}
        >
          Login
        </button>

        <div className="text-center">
          <Link to={"/register"}>
            <p>
              Don't have an account so{" "}
              <span className="text-blue-600">register</span>
            </p>
          </Link>
          <Link className="text-blue-600" to={"/forgot-password"}>
            <p>Forgot your password</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
