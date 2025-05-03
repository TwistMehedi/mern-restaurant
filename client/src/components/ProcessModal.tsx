export default function ProcessModal() {
    const handleSubmit = (e:any) => {
      e.preventDefault();
      alert("Proceeding to payment...");
      // Add your logic here: navigate to payment or process order
    };
  
    return (
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* Close button */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
  
          <h2 className="text-xl font-bold text-center mb-4">Check Your Order</h2>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
              required
            />
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              placeholder="Country"
              className="input input-bordered w-full"
              required
            />
  
            <div className="text-center mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Payment
              </button>
            </div>
          </form>
        </div>
      </dialog>
    );
  }
  