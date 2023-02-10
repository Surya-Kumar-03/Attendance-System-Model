import AttendanceRecords from "./attendanceButton";
import WebcamButton from "./webcamButton";

function Abstract() {
  return (
    <div className="flex flex-col w-full sm:w-1/2 h-auto justify-center items-center text-2xl gap-2">
      <p className="m-3 -mt-5 text-center animate__animated animate__flipInX">
        The <span className="text-4xl text-teal-600 font-medium">Attendance Tracking System</span> is a tool that uses the power of deep
        learning and machine learning to simplify the process of tracking
        attendance. This system is <span className="text-3xl text-pink-600">hands-free</span>, meaning no more manual signatures
        or check-ins, and operates in real-time for maximum accuracy. With its
        user-friendly interface and automated features, the Attendance Tracking
        System streamlines the attendance tracking process, saving valuable time
        and resources for educational institutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-4 animate__animated animate__flipInX">
        <WebcamButton></WebcamButton>
        <AttendanceRecords></AttendanceRecords>
      </div>
    </div>
  );
}

export default Abstract;
