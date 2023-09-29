import React from "react";

// import { PaymentsForm } from "react-square-web-payments-sdk";

export default function Camp() {
  return (
    <div className="flex flex-col w-full justify-center font-helvetica font-normal items-center bg-gradient-to-t from-[#f9fde6] to-white text-black">
      <div className="h-[calc(100svh-85px)] flex flex-col pt-16 items-center w-[95vw] footerXM:w-[90vw] footerSM:w-[85vw] sm:w-[80vw] xxl:w-[800px] ">
        <h1 className="mx-auto text-xl mb-5 font-medium">Forms</h1>
        <div className="flex flex-col sev:flex-row gap-5 items-center">
          <a
            href="/camp-package.pdf"
            target="_blank"
            className="bg-blue text-white rounded-lg transition-colors duration-200 text-xl
         py-1 px-3 whitespace-nowrap shadow-md hover:shadow-lg cursor-pointer hover:bg-blueHover "
          >
            Camp Package
          </a>
          <a
            href="/membership/child"
            target="_blank"
            className="bg-blue text-white rounded-lg transition-colors duration-200 text-xl
         py-1 px-3 whitespace-nowrap shadow-md hover:shadow-lg cursor-pointer hover:bg-blueHover "
          >
            Child Membership
          </a>
          <a
            href="/membership/child"
            target="_blank"
            className="bg-blue text-white rounded-lg transition-colors duration-200 text-xl
         py-1 px-3 whitespace-nowrap shadow-md hover:shadow-lg cursor-pointer hover:bg-blueHover "
          >
            Adult Membership
          </a>
        </div>
        <div className="flex flex-col items-center gap-10 mt-16 mx-5 text-center">
          <span>
            You can pay the dues for memberships, summer camp, and winter camp
            with Square or Zelle.
          </span>
          <span>
            <a
              href="https://razvedchik.square.site/s/shop"
              target="_blank"
              className="bg-blue text-white rounded-lg transition-colors duration-200 text-xl
         py-1 px-3 whitespace-nowrap shadow-md hover:shadow-lg cursor-pointer hover:bg-blueHover "
            >
              Square Site
            </a>
          </span>
          <span
            className="bg-blue text-white rounded-lg transition-colors duration-200 text-xl
         py-1 px-3 whitespace-nowrap shadow-md"
          >
            razvedchik.dnn@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}
