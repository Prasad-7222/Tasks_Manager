import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-[60vw] flex items-center justify-center px-8">
        <div className="w-full max-w-md mx-auto transform -translate-x-2">
          <h2 className="text-lg font-medium text-black text-center mb-8">
            TaskSphere
          </h2>
          {children}
        </div>
      </div>

      {/* Optional right-side image section */}
      {/* <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-[url('/bg-img.png')] bg-cover bg-no-repeat bg-center overflow-hidden p-8"> */}
      {/* <img src={UI_IMG} className="w-64 lg:w-[90]" /> */}
      {/* </div> */}
    </div>
  );
};

export default AuthLayout;
