import React from "react";


export function Spinner({ message }) {
  return (

    <div className="pt-40 flex flex-row justify-center items-center text-white text-4xl font-bold">{message}
      <div class="animate-spin inline-block size-12 border-[3px] border-current border-t-teal-600 text-teal-200 rounded-full dark:text-teal-500 ml-5 mt-2" role="status" aria-label="loading"></div></div>

  );
}
