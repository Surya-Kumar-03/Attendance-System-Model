import { Icon } from "@iconify/react";

function WebcamButton() {
  return (
    <button
      className="bg-gray-300 text-gray-800 transition-all 
        duration-500 font-bold py-2 px-4 rounded-md inline-flex 
        items-center gap-2 border-green-700 border-2 justify-center"
    >
      <Icon icon="ph:webcam-light" />
      <span>Start Tracking</span>
    </button>
  );
}

export default WebcamButton;
