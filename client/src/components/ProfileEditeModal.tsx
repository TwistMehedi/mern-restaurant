import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ProfileEditeModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [img, setImg] = useState<File | null>(null)


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setImg(file)
        setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data: FormData) => {
    const {name, address, road, country} = data;
    const updateData =  {name, address, road, country};
     console.log(updateData, img);
     
  };

   

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              Profile Form
            </h2>
            {previewUrl && (
              <div className="text-center">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-24 h-24 rounded-full mx-auto object-cover border"
                />
              </div>
            )}
            <div>
              <label className="block mb-1 font-semibold">Image</label>
              <input
                type="file"
                accept="image/*"
               onChange={handleImageChange}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full border px-4 py-2 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold">Address</label>
              <input
                type="text"
                {...register("address", { required: true })}
                className="w-full border px-4 py-2 rounded"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">Address is required</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold">Road</label>
              <input
                type="text"
                {...register("road")}
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Country</label>
              <input
                type="text"
                {...register("country", { required: true })}
                className="w-full border px-4 py-2 rounded"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">Country is required</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
