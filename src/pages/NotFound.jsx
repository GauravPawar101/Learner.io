import React from "react";
import { Link } from "react-router-dom";
import Cubes from "../components/Cubes";

function NotFound() {
  return (
    <div className="flex  items-center justify-center h-screen bg-gray-600">
      <p className="mt-2 text-white">
      <h2 className="mt-4 text-2xl  font-semibold text-gray-800">Page Not Found</h2>
        <Cubes/><h1 className='text-3xl white font-semibold absolute top-10 mx-[48vw] my-[10vh]'>404</h1>
        <h1 className='text-3xl white font-semibold absolute top-10 mx-[43vw] my-[80vh]'>Not Found</h1>
        <h2 className="m-12">Oops! The page you're looking for doesn't exist.{" "}
        <Link to="/" className="text-blue-200 hover:underline">
          Go back home
        </Link>
        .</h2>
      </p>
    </div>
  );
}

export default NotFound;
