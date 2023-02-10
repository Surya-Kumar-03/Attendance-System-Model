import Abstract from "./abstract";
import AttendanceLogo from "../../assets/HomePageIcon.svg";

function Content() {
  return (
    <div
      className="flex flex-col w-full h-full justify-center items-center bg-[#D6EAE3]"
    >
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <img
          src={AttendanceLogo}
          alt="Attendance"
          className="h-96 w-96 animate__animated animate__tada hidden sm:block"
        ></img>
        <Abstract></Abstract>
      </div>
    </div>
  );
}

export default Content;
