import React from "react";
import { useForm } from "react-hook-form";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log("Reset Password Data:", data);
    // Call your API here to reset the password
  };

  const newPassword = watch("newPassword");

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-sm bg-base-100 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>

        {/* New Password */}
        <div>
          <label className="label">
            <span className="label-text">New Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="input input-bordered w-full"
            {...register("newPassword", {
              required: "New password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          {errors.newPassword && (
            <p className="text-error text-sm">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="input input-bordered w-full"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-error text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={!isValid}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
