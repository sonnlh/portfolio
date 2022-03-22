import React from "react";

const Education = () => {
  return (
    <div name='education' className="mx-auto p-10 bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600">
              Education
            </p>
          </div>
          <div className=""></div>
        </div>
        <div
          class="w-full md:max-h-[80vh] flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
        
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              FPT University
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Major: Software Engineer <br />
              Projects: <br />
              - Science newspaper (Java servlet, HTML, CSS) <br/>
              - Music Player (Android Native, MySQL)
              <br />
              - Broadgame Ecomerce App (Android Native, NodeJS, PostgrestSQL)
              <br />
              - Capstone Project: Email marketing platform using Amazon's simple
              email service (designing email templates, sending email marketing,
              designing email marketing process by drag and drop applying
              bpmnmodel)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
