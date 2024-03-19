import React from "react";
import VideoComponent from "./videoComponent";

const DemoPage = () => {
  return (
    <>
    <section className=" mt-6 ">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold">Demo Page</h1>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="text-lg text-gray-600">This is a demo page</p>
      </div>
      <div className=" flex justify-center items-center mt-5">
      </div>
    </section>
        <VideoComponent />
    </>
  );
};

export default DemoPage;
