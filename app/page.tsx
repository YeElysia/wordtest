//import 'bootstrap/dist/css/bootstrap.min.css';
//import './globals.css'
"use client"

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full ">
        <div className="ellipse-1 -z-50"></div>
        <div className="ellipse-2 -z-50"></div>
        <div>
          <p className="text-[7vw] text-[#1935CA] pl-[15vw] subpixel-antialiased">Do </p>
          <p className="text-[3vw] text-[#1935CA] pl-[18vw] subpixel-antialiased">Your </p>
          <p className="text-[3vw] text-[#1935CA] pl-[18vw] subpixel-antialiased">Own </p>
          <p className="text-[7vw] text-[#1935CA] pl-[18vw] subpixel-antialiased">Check </p>
        </div>
        <div className="absolute left-[3vw] bottom-[5vh]">
          <p className="text-[2vw] text-[#4f8fff] subpixel-antialiased drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)]">Live life to the fullest</p>
        </div>
        <div className="relative flex flex-1 flex-col items-center">
          <a href="/login">
          <button className="absolute left-[14vw] top-[20vh] bg-[#4F8FFF] text-white text-[1vw] py-[5vh] px-[7vw] rounded-full hover:bg-blue-600">
            Log in to your account
          </button>
          </a>
          <a href="/signup">
          <button className="absolute left-[14vw] top-[40vh] bg-white text-[#698af7] text-[1vw] py-[5vh] px-[7vw] rounded-full hover:bg-gray-200">
            Sign up for an account
          </button>
          </a>
        </div>
      </div>
    </>
  );
}
