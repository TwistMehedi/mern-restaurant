import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

// Define the shape of the form data
interface FormData {
  restaurantName: string;
  address: string;
  country: string;
  category: 'memos' | 'jelebi' | 'biriyani'; // Enum-like type for category
  city: string;
}

export default function Restaurant() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<FormData>({
    mode: 'onChange', // This ensures validation happens as soon as the user types
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);  // Handle form submission here
  };

  return (
    <div className="max-w-2xl mt-5 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Restaurant</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700">Restaurant Name</label>
          <input
            id="restaurantName"
            {...register('restaurantName', { required: 'Restaurant name is required' })}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.restaurantName && <p className="text-red-500 text-xs">{errors.restaurantName.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            id="address"
            {...register('address', { required: 'Address is required' })}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            id="country"
            {...register('country', { required: 'Country is required' })}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            {...register('category', { required: 'Category is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Category</option>
            <option value="memos">Memos</option>
            <option value="jelebi">Jelebi</option>
            <option value="biriyani">Biryani</option>
          </select>
          {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            id="city"
            {...register('city', { required: 'City is required' })}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isValid} // Disable button when form is submitting or invalid
          className={`w-full py-2 px-4 rounded-md text-white ${isSubmitting || !isValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          {isSubmitting ? 'Submitting...' : 'Add Restaurant'}
        </button>
      </form>
    </div>
  );
};
