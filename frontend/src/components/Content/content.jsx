import Abstract from "./abstract";
import AttendanceLogo from "../../assets/HomePageIcon.svg";

function Content() {
  return (
    <div
      className="flex flex-col flex-grow justify-center items-center 
     w-screen bg-[#D6EAE3]"
    >
      <div className="flex flex-row justify-center items-center">
        <Abstract></Abstract>
        <img
          src={AttendanceLogo}
          alt="Attendance"
          className="h-96 w-96"
        ></img>
      </div>
    </div>
  );
}

export default Content;
