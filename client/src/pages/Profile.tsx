 
import ProfileEditeModal from "../components/ProfileEditeModal";
import Order from "./Order";

export default function Profile() {

    const openModal = () => {
        const modal = document.getElementById("my_modal_3") as HTMLDialogElement | null;
        if(modal){
            modal.showModal()
        }
    }

  return (
    <div className="flex flex-col bg-gray-100 p-4">
      <div className="bg-white rounded-xl p-6 w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Profile Details</h2>

        <div className="flex gap-5 justify-center">
          <div className="flex justify-center mb-4">
            <img
              src={""}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
            />
          </div>

          <div>
            <div className="text-left space-y-2">
              <div>
                <span className="font-semibold text-gray-700">Name:</span>
                <p className="text-gray-900">{ "N/A"}</p>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Email:</span>
                <p className="text-gray-900">{"N/A"}</p>
              </div>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn"
                onClick={openModal}
              >
                Edite
              </button>
               <ProfileEditeModal />
            </div>
          </div>
        </div>
      </div>
        <Order />
    </div>
  );
}
