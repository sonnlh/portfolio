import React from "react";

const Work = () => {
  return (
    <div name='experience' className="mx-auto p-10 bg-[#0a192f] w-full md:h-screen text-gray-300">
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
      <div className="mx-auto max-w-[1000px]">
        <p className="inline text-4xl font-bold border-b-4 border-pink-600 ">
          Experience
        </p>
        <p className="py-4">// These are experiences that I've </p>
      </div>
      <ol className="max-w-[1000px] mx-auto relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white-900 dark:text-white">
            MILITARY SERVICE | FEB 2020 - JAN 2022
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Feb 2020 - Jan 2022
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Completed 2 years of military service
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold dark:text-white">
            HITACHI VANTARA (GCS)
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Oct 2019 - Feb 2020
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Position: Frontend Developer
          </p>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            - Working as a frontend developer responsible for frontend like
            coding html/css and resolved the UI issues.
          </p>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            - Maitain and update a variety of web sites assigned <br />- Develop
            new features using ReactJS
            <br /> - Always get the job done before the deadline
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold dark:text-white">
            FPT SOFTWARE
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan 2018 - Jun 2018
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            On the job training <br />
            - UI design using ReactJS <br />- Interface design and feature
            development for android app using Android native
          </p>
        </li>
      </ol>
      </div>
    </div>
  );
};

export default Work;
